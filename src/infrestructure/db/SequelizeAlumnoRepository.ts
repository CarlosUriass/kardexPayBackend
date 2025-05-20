import { IAlumnoRepository } from "../../domain/repositories/IAlumnosRepository";
import { Alumno } from "../../domain/entities/Alumno";
import { ModelStatic, where } from "sequelize";
import { AlumnoModel } from "./SequelizeAlumnoModel";

export class SequelizeAlumnoRepository implements IAlumnoRepository {
  constructor(private readonly AlumnoModel: ModelStatic<AlumnoModel>) {}

  async findByMatricula(matricula: string): Promise<Alumno | null> {
    const record = await this.AlumnoModel.findOne({
      where: {
        matricula,
      },
    });

    if (!record) return null;

    return new Alumno(
      record.matricula,
      record.nombre_alumno,
      record.nombre_carrera,
      record.nombre_grupo,
      record.nombre_turno
    );
  }
}
