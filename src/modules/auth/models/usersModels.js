const { sequelize, DataTypes } = require("../../../plugins");

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: "id_usuario",
    },
    id_unidad_academica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id_unidad_academica",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      field: "email",
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password_hash",
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "rol",
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "fecha_creacion",
    },
    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "estatus",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = Usuarios;
