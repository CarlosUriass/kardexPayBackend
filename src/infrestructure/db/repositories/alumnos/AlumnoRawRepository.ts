import { IAlumnoRawRepository } from "../../../../domain/repositories/IAlumnosRawRepository";
import { AlumnoRaw } from "../../../../domain/entities/AlumnoRaw";
import { ModelStatic, where } from "sequelize";
import { AlumnoRawModel } from "../../models/alumnos/AlumnoRawModel";

export class SequelizeAlumnoRawRepository implements IAlumnoRawRepository {
  constructor(private readonly AlumnoRawModel: ModelStatic<AlumnoRawModel>) {}

  async findByMatricula(matricula: string): Promise<AlumnoRaw | null> {
    const record = await this.AlumnoRawModel.findOne({
      where: {
        matricula,
      },
    });

    if (!record) return null;

    return new AlumnoRaw(
      record.matricula,
      record.nombre,
      record.id_carrera,
      record.id_grupo,
      record.id_turno
    );
  }
}
