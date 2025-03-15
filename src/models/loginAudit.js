const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const LoginAudit = sequelize.define(
  "login_audit",
  {
    id_login: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_login",
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "correo",
    },

    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "fecha",
    },

    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ip",
    },

    estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "estatus",
    },

    agent: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "agent",
    },
  },
  {
    tableName: "login_audit",
    timestamps: false,
    underscored: true,
  }
);

module.exports = LoginAudit;
