const { sequelize, DataTypes } = require("../../../plugins");

const AlumnosRAW = sequelize.define(
  "AlumnosRAW",
  {
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_turno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "alumnos",
    schema: "alumnos",
    timestamps: false,
  }
);

module.exports = AlumnosRAW;
