import jwt from "jsonwebtoken";
import { IJwt } from "./IJwt";
import { envs } from "../../../config/envs";

const JWT_EXPIRES_IN = "1h";

export class JwtAdapter implements IJwt {
  async generateToken(payload: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        envs.JWT,
        { expiresIn: JWT_EXPIRES_IN },
        (err, token) => {
          if (err || !token) return reject(err);
          resolve(token);
        }
      );
    });
  }
}
