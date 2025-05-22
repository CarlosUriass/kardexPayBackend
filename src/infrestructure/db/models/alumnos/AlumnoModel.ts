import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";

export interface AlumnoModel extends Model {
  matricula: string;
  nombre_alumno: string;
  nombre_carrera: string;
  nombre_grupo: string;
  nombre_turno: string;
}

export const defineAlumnoModel = (
  sequelize: Sequelize
): ModelStatic<AlumnoModel> => {
  return sequelize.define<AlumnoModel>(
    "Alumno",
    {
      matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nombre_alumno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_carrera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_grupo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_turno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      schema: "alumnos",
      tableName: "v_alumnos_detalle",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
