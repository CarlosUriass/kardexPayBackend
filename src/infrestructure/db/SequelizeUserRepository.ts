import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { ModelStatic } from "sequelize";
import { UserModel } from "./SequelizeUserModel";

export class SequelizeUserRepository implements IUserRepository {
  constructor(private readonly userModel: ModelStatic<UserModel>) {}

  async findByEmail(email: string): Promise<User | null> {
    const record = await this.userModel.findOne({ where: { email } });
    if (!record) return null;
    return new User(
      record.id_user,
      record.email,
      record.password,
      record.id_rol
    );
  }

  async findByUserId(userId: string): Promise<User | null> {
    const record = await this.userModel.findOne({ where: { id_user: userId } });

    if (!record) return null;

    return new User(
      record.id_user,
      record.email,
      record.password,
      record.id_rol
    );
  }

  async createNewUser(
    id_user: string,
    email: string,
    password: string,
    id_rol: number
  ): Promise<User | null> {
    const record = await this.userModel.create({
      id_user,
      email,
      password,
      id_rol,
    });

    return new User(
      record.id_user,
      record.email,
      record.password,
      record.id_rol
    );
  }
}
