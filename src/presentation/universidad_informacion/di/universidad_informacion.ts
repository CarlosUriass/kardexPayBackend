import { UniversidadInformacionService } from "../services/universidad_informacion.service";
import { defineTramiteModel } from "../../../infrestructure/db/SequelizeTramitesModel";
import { sequelize } from "../../../infrestructure/db/sequelize";
import { SequelizeTramitesRepository } from "../../../infrestructure/db/SequelizeTramitesRepository";

export function buildUniversidadInformacionService(): UniversidadInformacionService {
  const TramiteModel = defineTramiteModel(sequelize);
  const TramitesRepo = new SequelizeTramitesRepository(TramiteModel);

  return new UniversidadInformacionService(TramitesRepo);
}
