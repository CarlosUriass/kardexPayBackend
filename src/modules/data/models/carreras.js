const { sequelize, DataTypes } = require("../../../plugins");

const Carreras = sequelize.define(
  "Carreras",
  {
    id_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre_unidad_academica: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre_carrera: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "v_carreras",
    schema: "public",
    timestamps: false,
  }
);

module.exports = Carreras;
