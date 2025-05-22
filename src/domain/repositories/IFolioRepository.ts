import { Folio } from "../entities/Folio";

export interface IFolioRepository {
  createFolio(
    matricula: string,
    id_tramite: number,
    descuento: number,
    total: number,
    email: string,
    id_metodo_pago?: number
  ): Promise<Folio | null>;
}
