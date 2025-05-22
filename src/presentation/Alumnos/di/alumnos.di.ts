import { AlumnoService } from "../services/alumnos.service";
import { AlumnoRepository } from "../../../infrestructure/db/repositories/alumnos/AlumnoRepository";
import { defineAlumnoModel } from "../../../infrestructure/db/models/alumnos/AlumnoModel";
import { sequelize } from "../../../infrestructure/db/sequelize";

export function builAlumnoService(): AlumnoService {
  const AlumnoModel = defineAlumnoModel(sequelize);
  const AlumnoRepo = new AlumnoRepository(AlumnoModel);

  return new AlumnoService(AlumnoRepo);
}
