import { ITramitesRepository } from "../../domain/repositories/ITramitesRepository";
import { Tramites } from "../../domain/entities/Tramites";
import { ModelStatic } from "sequelize";
import { TramiteModel } from "./SequelizeTramitesModel";

export class SequelizeTramitesRepository implements ITramitesRepository {
  constructor(private readonly TramiteModel: ModelStatic<TramiteModel>) {}

  async getAllTramites(): Promise<Tramites[]> {
    const tramites = await this.TramiteModel.findAll();

    return tramites.map((tramite) => {
      return new Tramites(
        tramite.id_tramite,
        tramite.nombre,
        tramite.descripcion,
        tramite.costo
      );
    });
  }
}
