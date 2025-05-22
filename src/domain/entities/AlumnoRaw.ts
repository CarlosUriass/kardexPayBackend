export class AlumnoRaw {
  constructor(
    public readonly matricula: string,
    public readonly nombre: string,
    public readonly id_carrera: number,
    public readonly id_grupo: number,
    public readonly id_turno: number
  ) {}
}
