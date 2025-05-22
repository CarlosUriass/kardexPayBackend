import { ITramitesRepository } from "../../../../domain/repositories/ITramitesRepository";
import { Tramites } from "../../../../domain/entities/Tramites";
import { ModelStatic } from "sequelize";
import { TramiteModel } from "../../models/tramites/TramitesModel";

export class SequelizeTramitesRepository implements ITramitesRepository {
  constructor(private readonly TramiteModel: ModelStatic<TramiteModel>) {}

  async findById(id_tramite: number): Promise<Tramites | null> {
    const tramite = await this.TramiteModel.findByPk(id_tramite);
    if (!tramite) return null;

    return new Tramites(
      tramite.id_tramite,
      tramite.nombre,
      tramite.descripcion,
      tramite.costo
    );
  }

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
