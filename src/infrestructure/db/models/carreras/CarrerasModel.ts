import { Sequelize, Model, ModelStatic, DataType, DataTypes } from "sequelize";

export interface CarrerasModel extends Model {
  id_carrera: number;
  nombre: string;
  unidad_academica: string;
  direccion: string;
}

export const defineCarrerasModel = (
  sequelize: Sequelize
): ModelStatic<CarrerasModel> => {
  return sequelize.define<CarrerasModel>(
    "Carreras",
    {
      id_carrera: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_carrera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unidad_academica: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "v_carreras_detalle",
      schema: "universidad_info",
      timestamps: false,
    }
  );
};
