import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),

  // POSTGRES DATABASE
  DB_HOST: get("DB_HOST").required().asString(),
  DB_PORT: get("DB_PORT").required().asPortNumber(),
  DB_USER: get("DB_USER").required().asString(),
  DB_PASSWORD: get("DB_PASSWORD").required().asString(),
  DB_NAME: get("DB_NAME").required().asString(),

  // JSON WEB TOKEN
  JWT: get("JWT_SECRET").required().asString(),
};
