// src/config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Obtener los valores de las variables de entorno
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_SSL } = process.env;

// Configurar la conexión a PostgreSQL usando Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: DB_PORT,
  ssl: DB_SSL === "true",
  dialectOptions: {
    ssl: DB_SSL === "true" ? { rejectUnauthorized: false } : false,
  },
  logging: false,
});

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Intenta autenticar la conexión
    console.log("Conexión a la base de datos establecida con éxito");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
    process.exit(1); // Termina el proceso si la conexión falla
  }
};

// Exportamos tanto la función connectDB como la instancia sequelize
module.exports = { connectDB, sequelize };
