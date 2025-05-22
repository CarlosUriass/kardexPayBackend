import { Carrera } from "../entities/Carreras";

export interface ICarrerasRepository {
  findByIdCarrera(id_carrera: number): Promise<Carrera | null>;
}
