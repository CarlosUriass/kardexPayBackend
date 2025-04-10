const { Sequelize, DataTypes } = require("sequelize");
const { getEnv } = require("../dotenv/dotenv.plugin");

const useSSL = getEnv("DB_SSL") === "true"; // <- Asegura lectura correcta

/**
 * Configures and returns a Sequelize instance for connecting to a PostgreSQL database.
 */
const sequelize = new Sequelize({
  host: getEnv("DB_HOST"),
  port: getEnv("DB_PORT"),
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  dialect: "postgres",
  logging: false,
  dialectOptions: useSSL
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
});

module.exports = {
  sequelize,
  DataTypes,
};
