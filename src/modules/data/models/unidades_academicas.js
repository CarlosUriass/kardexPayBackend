const { sequelize, DataTypes } = require("../../../plugins");

const UnidadesAcademicas = sequelize.define(
  "UnidadesAcademicas",
  {
    id_unidad_academica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_unidad_regional: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clave_sep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "unidades_academicas",
    schema: "public",
    timestamps: false,
  }
);

module.exports = UnidadesAcademicas;
