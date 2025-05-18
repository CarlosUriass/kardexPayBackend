import { Sequelize } from "sequelize";
import { envs } from "../../config/envs";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  logging: false,
});
