import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";

export interface FoliosCreados extends Model {
  folio: string;
  fecha_solicitud: Date;
  total: number;
  descuento: number;
  email: string;
  matricula: string;
  nombre_alumno: string;
  nombre_tramite: string;
  descripcion_tramite: string;
  costo: number;
  metodo_pago: string;
  carrera: string;
  id_unidad_academica: number;
  nombre_grupo: string;
  turno: string;
  tipo_programa: string;
  estatus_folio: string;
}

export const defineFoliosCreadosModel = (
  sequelize: Sequelize
): ModelStatic<FoliosCreados> => {
  return sequelize.define<FoliosCreados>(
    "FoliosCreados",
    {
      folio: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      fecha_solicitud: {
        type: DataTypes.DATE,
      },
      total: {
        type: DataTypes.FLOAT,
      },
      descuento: {
        type: DataTypes.FLOAT,
      },
      email: {
        type: DataTypes.STRING,
      },
      matricula: {
        type: DataTypes.STRING,
      },
      nombre_alumno: {
        type: DataTypes.STRING,
      },
      nombre_tramite: {
        type: DataTypes.STRING,
      },
      descripcion_tramite: {
        type: DataTypes.STRING,
      },
      costo: {
        type: DataTypes.INTEGER,
      },
      metodo_pago: {
        type: DataTypes.STRING,
      },
      carrera: {
        type: DataTypes.STRING,
      },
      id_unidad_academica: {
        type: DataTypes.INTEGER,
      },
      nombre_grupo: {
        type: DataTypes.STRING,
      },
      turno: {
        type: DataTypes.STRING,
      },
      tipo_programa: {
        type: DataTypes.STRING,
      },
      estatus_folio: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "vw_folios_detalle",
      schema: "folios",
      timestamps: false,
    }
  );
};
