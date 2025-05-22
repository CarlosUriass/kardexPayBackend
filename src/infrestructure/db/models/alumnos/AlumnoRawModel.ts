import { Sequelize, Model, ModelStatic, DataTypes } from "sequelize";

export interface AlumnoRawModel extends Model {
  matricula: string;
  nombre: string;
  id_carrera: number;
  id_grupo: number;
  id_turno: number;
}

export const defineAlumnoRawModel = (
  sequelize: Sequelize
): ModelStatic<AlumnoRawModel> => {
  return sequelize.define<AlumnoRawModel>(
    "AlumnoRaw",
    {
      matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_carrera: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_turno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "alumnos",
      schema: "alumnos",
      timestamps: false,
    }
  );
};
