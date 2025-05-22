import { ITramitesRepository } from "../../../domain/repositories/ITramitesRepository";
import { Tramites } from "../../../domain/entities/Tramites";

export class UniversidadInformacionService {
  constructor(private readonly tramitesRepository: ITramitesRepository) {}

  async getAllTramites(): Promise<Tramites[] | string> {
    const tramites = await this.tramitesRepository.getAllTramites();

    if (!tramites || tramites.length === 0) {
      return "Ningún trámite fue encontrado";
    }

    return tramites;
  }
}
