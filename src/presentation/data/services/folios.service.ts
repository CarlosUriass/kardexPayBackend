import { IFoliosRepository } from "../../../domain/repositories/IFoliosRepository";

export class FoliosService {
  constructor(private readonly foliosRepository: IFoliosRepository) {}

  async getAllFolios(id_unidad_academica: number): Promise<Object | null> {
    const folios =
      await this.foliosRepository.getAllFolios(id_unidad_academica);

    if (!folios || folios.length === 0) return null;

    return folios;
  }
}
