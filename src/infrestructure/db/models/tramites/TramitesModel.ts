import { Sequelize, DataType, Model, ModelStatic, DataTypes } from "sequelize";

export interface TramiteModel extends Model {
  id_tramite: string;
  nombre: string;
  descripcion: string;
  costo: number;
}

export const defineTramiteModel = (
  sequelize: Sequelize
): ModelStatic<TramiteModel> => {
  return sequelize.define<TramiteModel>(
    "Tramites",
    {
      id_tramite: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      schema: "universidad_info",
      tableName: "tramites",
      timestamps: false,
    }
  );
};
