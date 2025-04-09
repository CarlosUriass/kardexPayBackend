const { getEnv } = require("./dotenv/dotenv.plugin");
const { generateJWT } = require("./jwt/generate-jwt.plugin");
const { sequelize, DataTypes } = require("./sequelize/sequelize.plugin");

module.exports = {
  getEnv,
  sequelize,
  DataTypes,
  generateJWT,
};
