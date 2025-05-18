import { AuthService } from "../services/Auth.service";
import { SequelizeUserRepository } from "../../../infrestructure/db/SequelizeUserRepository";
import { defineUserModel } from "../../../infrestructure/db/SequelizeUserModel";
import { sequelize } from "../../../infrestructure/db/sequelize";
import { BcryptPasswordHasher } from "../../../infrestructure/adapters/Bcrypt/BcryptPasswordHasher";
import { JwtAdapter } from "../../../infrestructure/adapters/jwt/jwt";
import { UuidGenerator } from "../../../infrestructure/adapters/uuid/UuidGenerator";

export function buildAuthService(): AuthService {
  const UserModel = defineUserModel(sequelize);
  const userRepo = new SequelizeUserRepository(UserModel);
  const passwordHasher = new BcryptPasswordHasher();
  const tokenGenerator = new JwtAdapter();
  const uuidGenerator = new UuidGenerator();
  return new AuthService(
    userRepo,
    passwordHasher,
    tokenGenerator,
    uuidGenerator
  );
}
