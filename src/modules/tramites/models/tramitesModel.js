const { sequelize, DataTypes } = require("../../../plugins");

const Servicios = sequelize.define(
  "servicios",
  {
    id_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    aplica_alumnos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "servicios",
    timestamps: false,
  }
);

module.exports = {
  Servicios,
};
