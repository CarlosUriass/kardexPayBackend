const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_usuario",
    },
    id_unidad_academica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "unidades_academicas",
        key: "id_unidad_academica",
      },
      field: "id_unidad_academica",
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "correo",
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password_hash",
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id_rol",
      },
      field: "rol",
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "fecha_creacion",
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      field: "estatus",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Usuario;
