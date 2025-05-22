export class Folio {
  constructor(
    public readonly folio: string,
    public readonly id_tramite: number,
    public readonly id_metodo_pago: number,
    public readonly descuento: number,
    public readonly total: number,
    public readonly fecha_solicitud: Date,
    public readonly id_estatus: number,
    public readonly email: string
  ) {}
}
