import { Alumno } from "../entities/Alumno";

export interface IAlumnoRepository {
  findByMatricula(matricula: string): Promise<Alumno | null>;
}
