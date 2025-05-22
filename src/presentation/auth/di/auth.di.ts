import { AuthService } from "../services/Auth.service";
import { SequelizeUserRepository } from "../../../infrestructure/db/repositories/users/UserRepository";
import { defineUserModel } from "../../../infrestructure/db/models/users/UserModel";
import { sequelize } from "../../../infrestructure/db/sequelize";
import { BcryptPasswordHasher } from "../../../infrestructure/adapters/Bcrypt/BcryptPasswordHasher";
import { JwtAdapter } from "../../../infrestructure/adapters/jwt/jwt";
import { UuidGenerator } from "../../../infrestructure/adapters/uuid/UuidGenerator";
import { SendEmails } from "../../../infrestructure/adapters/Resend/SendEmail";

export function buildAuthService(): AuthService {
  const UserModel = defineUserModel(sequelize);
  const userRepo = new SequelizeUserRepository(UserModel);
  const passwordHasher = new BcryptPasswordHasher();
  const tokenGenerator = new JwtAdapter();
  const uuidGenerator = new UuidGenerator();
  const emailSender = new SendEmails();
  return new AuthService(
    userRepo,
    passwordHasher,
    tokenGenerator,
    uuidGenerator,
    emailSender
  );
}
