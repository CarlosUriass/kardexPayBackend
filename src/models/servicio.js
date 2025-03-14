const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db"); // Importa la instancia sequelize desde db.js

const Servicio = sequelize.define(
  "Servicio",
  {
    id_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: "id_servicio",
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre",
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "descripcion",
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "costo",
    },
  },
  {
    tableName: "servicios",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Servicio;
