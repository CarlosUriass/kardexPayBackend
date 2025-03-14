const Servicio = require("../models/servicio"); // Importa el modelo

// Obtener todos los servicios
const getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll(); // Encuentra todos los registros
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los servicios", error });
  }
};

module.exports = {
  getAllServicios,
};
