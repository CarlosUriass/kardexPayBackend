import { IFolioRepository } from "../../../../domain/repositories/IFolioRepository";
import { IPrinterAdapter } from "../../../../infrestructure/adapters/escpos/IPrinterAdapater";
import { imprimirTicketEscpos } from "../../../../utils/imprimitTicket";
import { IAlumnoRawRepository } from "../../../../domain/repositories/IAlumnosRawRepository";
import { ICarrerasRepository } from "../../../../domain/repositories/ICarrerasRepository";
import { ITramitesRepository } from "../../../../domain/repositories/ITramitesRepository";
import { ISendEmails } from "../../../../infrestructure/adapters/Resend/ISendEmails";

export class AutoserviceService {
  constructor(
    private readonly print: IPrinterAdapter,
    private readonly foliosRepository: IFolioRepository,
    private readonly AlumnoRawRepository: IAlumnoRawRepository,
    private readonly carrerasRepository: ICarrerasRepository,
    private readonly tramitesRepository: ITramitesRepository,
    private readonly emailSender: ISendEmails
  ) {}

  async generarFolio(
    matricula: string,
    tramite: number,
    email: string,
    descuento: number,
    pago: number
  ): Promise<{ folio: string; fecha_solicitud: Date }> {
    const folio = await this.foliosRepository.createFolio(
      matricula,
      tramite,
      descuento,
      pago,
      email
    );

    if (!folio) {
      throw new Error("Hubo un error al crear el folio.");
    }

    const tramiteDetalles = await this.tramitesRepository.findById(tramite);
    if (!tramiteDetalles) {
      throw new Error("No se encontró el trámite solicitado con ese ID.");
    }

    const alumno = await this.AlumnoRawRepository.findByMatricula(matricula);
    if (!alumno) {
      throw new Error("No se encontró el alumno con esa matrícula.");
    }

    const { id_carrera } = alumno;
    const carreraDetalles =
      await this.carrerasRepository.findByIdCarrera(id_carrera);
    if (!carreraDetalles) {
      throw new Error("No se encontró la carrera con ese ID.");
    }

    try {
      await this.print.print((printer) => {
        return imprimirTicketEscpos(
          printer,
          "Universidad Autonoma de Sinaloa",
          carreraDetalles.unidad_academica,
          carreraDetalles.direccion,
          `${alumno.matricula}    ${alumno.nombre}`,
          tramiteDetalles.nombre,
          1,
          tramiteDetalles.costo,
          pago,
          descuento,
          folio.folio
        );
      });
    } catch (e) {
      console.error("Error al imprimir el ticket:", e);
      throw new Error(
        "Folio generado pero ocurrió un error al imprimir el ticket."
      );
    }

    try {
      const nombres = alumno.nombre.split(" ");
      const primerNombre = nombres[0];
      const primerNombreFormateado =
        primerNombre.charAt(0).toUpperCase() +
        primerNombre.slice(1).toLowerCase();
      await this.emailSender.sendEmailPayment(
        email,
        primerNombreFormateado,
        folio.folio,
        carreraDetalles.direccion,
        tramiteDetalles.nombre,
        tramiteDetalles.costo,
        descuento,
        folio.total
      );
    } catch (error) {
      console.error("Error al enviar el correo electronico", error);
      throw new Error("Ocurrió un error al enviar el correo electronico");
    }

    return {
      folio: folio.folio,
      fecha_solicitud: folio.fecha_solicitud,
    };
  }
}
