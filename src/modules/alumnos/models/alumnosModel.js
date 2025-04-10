const { sequelize, DataTypes } = require("../../../plugins");

const Alumnos = sequelize.define(
  "Alumnos",
  {
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: "matricula",
    },
    nombre_alumno: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_alumno",
    },
    nombre_carrera: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_carrera",
    },
    nombre_grupo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_grupo",
    },
    nombre_turno: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nombre_turno",
    },
  },
  {
    tableName: "vista_alumno_detalle",
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  }
);

module.exports = Alumnos;
