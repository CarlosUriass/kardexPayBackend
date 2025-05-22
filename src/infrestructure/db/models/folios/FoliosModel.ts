import { Sequelize, DataTypes, Model, ModelStatic, DataType } from "sequelize";

export interface FolioModel extends Model {
  folio: string;
  matricula: string;
  id_tramite: number;
  id_metodo_pago: number;
  descuento: number;
  total: number;
  fecha_solicitud: Date;
  id_estatus: number;
  email: string;
}

export const defineFolioModel = (
  sequelize: Sequelize
): ModelStatic<FolioModel> => {
  return sequelize.define<FolioModel>(
    "Folios",
    {
      folio: {
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: true,
      },
      matricula: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_tramite: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_metodo_pago: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW(),
      },
      id_estatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      schema: "folios",
      tableName: "folios",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
