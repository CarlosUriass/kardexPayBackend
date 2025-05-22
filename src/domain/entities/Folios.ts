export class Folios {
  constructor(
    public readonly folio: string,
    public readonly fecha_solicitud: Date,
    public readonly total: number,
    public readonly descuento: number,
    public readonly email: string,
    public readonly matricula: string,
    public readonly nombre_alumno: string,
    public readonly nombre_tramite: string,
    public readonly descripcion_tramite: string,
    public readonly costo: number,
    public readonly metodo_pago: string,
    public readonly carrera: string,
    public readonly nombre_grupo: string,
    public readonly turno: string,
    public readonly tipo_programa: string,
    public readonly estatus_folio: string
  ) {}
}
