import { AlumnoRaw } from "../entities/AlumnoRaw";

export interface IAlumnoRawRepository {
  findByMatricula(matricula: string): Promise<AlumnoRaw | null>;
}
