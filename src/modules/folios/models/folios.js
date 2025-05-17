const { sequelize, DataTypes } = require("../../../plugins");

const Folios = sequelize.define(
  "Folios",
  {
    folio: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true,
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cajero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "folios",
    schema: "folios",
    timestamps: false,
  }
);

module.exports = Folios;
