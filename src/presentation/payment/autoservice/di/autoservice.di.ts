import { AutoserviceService } from "../services/autoservice.service";
import { UsbPrinterAdapter } from "../../../../infrestructure/adapters/escpos/Printer";
import { SequelizeFoliosRepository } from "../../../../infrestructure/db/repositories/folios/FolioRepository";
import { sequelize } from "../../../../infrestructure/db/sequelize";
import { defineFolioModel } from "../../../../infrestructure/db/models/folios/FoliosModel";
import { defineAlumnoRawModel } from "../../../../infrestructure/db/models/alumnos/AlumnoRawModel";
import { SequelizeAlumnoRawRepository } from "../../../../infrestructure/db/repositories/alumnos/AlumnoRawRepository";
import { defineTramiteModel } from "../../../../infrestructure/db/models/tramites/TramitesModel";
import { SequelizeTramitesRepository } from "../../../../infrestructure/db/repositories/tramites/TramitesRepository";
import { defineCarrerasModel } from "../../../../infrestructure/db/models/carreras/CarrerasModel";
import { CarrerasRepository } from "../../../../infrestructure/db/repositories/carreras/CarrerasRepository";
import { SendEmails } from "../../../../infrestructure/adapters/Resend/SendEmail";

export function buildAutoserviceService(): AutoserviceService {
  const tramitesModel = defineTramiteModel(sequelize);
  const FolioModel = defineFolioModel(sequelize);
  const alumnoRawModel = defineAlumnoRawModel(sequelize);
  const carrerasModel = defineCarrerasModel(sequelize);
  const printerAdapter = new UsbPrinterAdapter();
  const foliosRepository = new SequelizeFoliosRepository(FolioModel);
  const alumnosRawRepository = new SequelizeAlumnoRawRepository(alumnoRawModel);
  const tramitesRepository = new SequelizeTramitesRepository(tramitesModel);
  const carrerasRepository = new CarrerasRepository(carrerasModel);
  const emailSender = new SendEmails();

  return new AutoserviceService(
    printerAdapter,
    foliosRepository,
    alumnosRawRepository,
    carrerasRepository,
    tramitesRepository,
    emailSender
  );
}
