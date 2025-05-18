import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findByUserId(userId: string): Promise<User | null>;
  createNewUser(
    id_user: string,
    email: string,
    password: string,
    id_rol: number
  ): Promise<User | null>;
}
