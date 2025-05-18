export interface IJwt {
  generateToken(payload: object): Promise<string>;
}
