import { UniversidadInformacionService } from "../services/universidad_informacion.service";
import { defineTramiteModel } from "../../../infrestructure/db/models/tramites/TramitesModel";
import { sequelize } from "../../../infrestructure/db/sequelize";
import { SequelizeTramitesRepository } from "../../../infrestructure/db/repositories/tramites/TramitesRepository";

export function buildUniversidadInformacionService(): UniversidadInformacionService {
  const TramiteModel = defineTramiteModel(sequelize);
  const TramitesRepo = new SequelizeTramitesRepository(TramiteModel);

  return new UniversidadInformacionService(TramitesRepo);
}
