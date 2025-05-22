import { IFolioRepository } from "../../../../domain/repositories/IFolioRepository";
import { Folio } from "../../../../domain/entities/Folio";
import { ModelStatic } from "sequelize";
import { FolioModel } from "../../models/folios/FoliosModel";

export class SequelizeFoliosRepository implements IFolioRepository {
  constructor(private readonly FolioModel: ModelStatic<FolioModel>) {}

  async createFolio(
    matricula: string,
    id_tramite: number,
    descuento: number,
    total: number,
    email: string,
    id_metodo_pago?: number
  ): Promise<Folio | null> {
    const folio = await this.FolioModel.create({
      matricula,
      id_tramite,
      id_metodo_pago,
      descuento,
      total,
      email,
    });

    return new Folio(
      folio.folio,
      folio.id_tramite,
      folio.id_metodo_pago,
      folio.descuento,
      folio.total,
      folio.fecha_solicitud,
      folio.id_estatus,
      folio.email
    );
  }
}
