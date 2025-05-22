import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from "../../../../domain/entities/User";
import { ModelStatic, where } from "sequelize";
import { UserModel } from "../../models/users/UserModel";

export class SequelizeUserRepository implements IUserRepository {
  constructor(private readonly userModel: ModelStatic<UserModel>) {}

  async findByEmail(email: string): Promise<User | null> {
    const record = await this.userModel.findOne({ where: { email } });
    if (!record) return null;
    return new User(
      record.id_user,
      record.email,
      record.password,
      record.id_rol,
      record.email_verified
    );
  }

  async findByUserId(userId: string): Promise<User | null> {
    const record = await this.userModel.findOne({ where: { id_user: userId } });

    if (!record) return null;

    return new User(
      record.id_user,
      record.email,
      record.password,
      record.id_rol,
      record.email_verified
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
      record.id_rol,
      record.email_verified
    );
  }

  async verifyEmail(userId: string): Promise<User | null> {
    const [affectedRows] = await this.userModel.update(
      { email_verified: true },
      { where: { id_user: userId } }
    );

    if (affectedRows === 0) return null;

    const updatedUser = await this.userModel.findOne({
      where: { id_user: userId },
    });
    if (!updatedUser) return null;

    return new User(
      updatedUser.id_user,
      updatedUser.email,
      updatedUser.password,
      updatedUser.id_rol,
      updatedUser.email_verified
    );
  }
}
