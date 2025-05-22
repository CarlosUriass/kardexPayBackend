export class Alumno {
  constructor(
    public readonly matricula: string,
    public readonly nombre: string,
    public readonly carrera: string,
    public readonly grupo: string,
    public readonly turno: string
  ) {}
}
