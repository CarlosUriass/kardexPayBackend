import { IAlumnoRepository } from "../../../domain/repositories/IAlumnosRepository";

export class AlumnoService {
  constructor(private readonly alumnosRepository: IAlumnoRepository) {}

  async getInfo(matricula: string): Promise<Object | null> {
    const alumno = await this.alumnosRepository.findByMatricula(matricula);

    if (!alumno) return null;

    return {
      matricula: alumno.matricula,
      nombre: alumno.nombre,
      carrera: alumno.carrera,
      grupo: alumno.grupo,
      turno: alumno.turno,
    };
  }
}
