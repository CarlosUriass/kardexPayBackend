import { FoliosService } from "../services/folios.service";
import { FoliosRepository } from "../../../infrestructure/db/repositories/folios/FoliosRepository";
import { defineFoliosCreadosModel } from "../../../infrestructure/db/models/folios/FoliosCreadosModel";
import { sequelize } from "../../../infrestructure/db/sequelize";

export function buidlFoliosService(): FoliosService {
  const FoliosModel = defineFoliosCreadosModel(sequelize);
  const FoliosRepo = new FoliosRepository(FoliosModel);

  return new FoliosService(FoliosRepo);
}
