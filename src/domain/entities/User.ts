export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public password: string,
    public readonly idRol: number | null,
    public readonly email_verified: boolean
  ) {}
}
