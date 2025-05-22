import bcrypt from "bcrypt";
import { IPasswordHasher } from "./IPasswordHashed";

export class BcryptPasswordHasher implements IPasswordHasher {
  async compare(plainText: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashed);
  }

  async hash(plainText: string): Promise<string> {
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);

    return bcrypt.hash(plainText, saltRounds);
  }
}
