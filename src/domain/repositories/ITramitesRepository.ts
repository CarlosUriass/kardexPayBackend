import { Tramites } from "../entities/Tramites";

export interface ITramitesRepository {
  getAllTramites(): Promise<Tramites[]>;
}
