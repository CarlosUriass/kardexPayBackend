const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const VistaAlumnos = sequelize.define(
  "VistaAlumnos",
  {
    matricula: {
      type: DataTypes.STRING,
      primaryKey: true, // No es una PK real, pero Sequelize la necesita para identificar registros
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    primer_apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    segundo_apellido: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser NULL si es opcional
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    carrera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facultad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "alumnos_datos_generales",
    timestamps: false,
    underscored: true,
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la vista
  }
);

module.exports = VistaAlumnos;
