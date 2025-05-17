const folios = require("../models/folios");
const alumnos = require("../../alumnos/models/alumnosRaw");
const { Servicios } = require("../../tramites/models/tramitesModel");
const Carreras = require("../../data/models/carreras");
const { ejecutarImpresion } = require("../../../plugins/escpos/runPrinter");

const nuevoFolioService = async (
  matricula,
  cajero,
  metodoPago,
  id_servicio
) => {
  try {
    const nuevo = await folios.create({
      matricula: matricula,
      id_cajero: cajero,
      id_metodo_pago: metodoPago,
      id_servicio: id_servicio,
      fecha_solicitud: new Date(),
      fecha_entrega: null,
    });

    const servicio = await Servicios.findOne({
      where: {
        id_servicio,
      },
    });

    const nombreServicio = servicio.nombre;

    const alumno = await alumnos.findOne({
      where: {
        matricula,
      },
    });

    const carrera = await Carreras.findOne({
      where: {
        id_carrera: alumno.id_carrera,
      },
    });

    const unidadAcademica = carrera.nombre_unidad_academica;
    const direccion = carrera.direccion;

    console.log(direccion);

    return nuevo;
  } catch (error) {
    console.error("Error al crear nuevo folio:", error);
    throw error;
  }
};

module.exports = {
  nuevoFolioService,
};
