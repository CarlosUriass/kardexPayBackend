import { IFoliosRepository } from "../../../../domain/repositories/IFoliosRepository";
import { Folios } from "../../../../domain/entities/Folios";
import { ModelStatic } from "sequelize";
import { FoliosCreados } from "../../models/folios/FoliosCreadosModel";

export class FoliosRepository implements IFoliosRepository {
  constructor(private readonly FoliosCreados: ModelStatic<FoliosCreados>) {}

  async getAllFolios(id_unidad_academica: number): Promise<Folios[] | null> {
    const records = await this.FoliosCreados.findAll({
      where: {
        id_unidad_academica,
      },
    });

    return records.map((record) => ({
      folio: record.folio,
      fecha_solicitud: record.fecha_solicitud,
      total: record.total,
      descuento: record.descuento,
      email: record.email,
      matricula: record.matricula,
      nombre_alumno: record.nombre_alumno,
      nombre_tramite: record.nombre_tramite,
      descripcion_tramite: record.descripcion_tramite,
      costo: record.costo,
      metodo_pago: record.metodo_pago,
      carrera: record.carrera,
      id_unidad_academica: record.id_unidad_academica,
      nombre_grupo: record.nombre_grupo,
      turno: record.turno,
      tipo_programa: record.tipo_programa,
      estatus_folio: record.estatus_folio,
    }));
  }
}
