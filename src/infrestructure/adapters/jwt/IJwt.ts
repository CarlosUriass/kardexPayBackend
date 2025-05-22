import { User } from "../../../domain/entities/User";

export interface IJwt {
  generateToken(payload: object): Promise<string>;
  verifyToken(token: string): Promise<User>;
}
