const { sequelize, DataTypes } = require("../../../plugins");

const UnidadesRegionales = sequelize.define(
  "UnidadesRegionales",
  {
    id_unidad_regional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Sequelize usará el sequence automáticamente
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "unidades_regionales",
    schema: "public",
    timestamps: false,
  }
);

module.exports = UnidadesRegionales;
