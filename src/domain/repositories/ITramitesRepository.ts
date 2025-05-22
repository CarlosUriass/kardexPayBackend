import { Tramites } from "../entities/Tramites";

export interface ITramitesRepository {
  getAllTramites(): Promise<Tramites[]>;
  findById(id_tramite: number): Promise<Tramites | null>;
}
