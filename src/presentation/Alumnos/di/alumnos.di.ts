import { AlumnoService } from "../services/alumnos.service";
import { SequelizeAlumnoRepository } from "../../../infrestructure/db/SequelizeAlumnoRepository";
import {
  defineAlumnoModel,
  AlumnoModel,
} from "../../../infrestructure/db/SequelizeAlumnoModel";
import { sequelize } from "../../../infrestructure/db/sequelize";

export function builAlumnoService(): AlumnoService {
  const AlumnoModel = defineAlumnoModel(sequelize);
  const AlumnoRepo = new SequelizeAlumnoRepository(AlumnoModel);

  return new AlumnoService(AlumnoRepo);
}
