import { Folios } from "../entities/Folios";

export interface IFoliosRepository {
  getAllFolios(id_unidad_academica: number): Promise<Folios[] | null>;
}
