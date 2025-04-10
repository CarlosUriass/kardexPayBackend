const Alumnos = require("../models/alumnosModel");

const getStudentData = async (req, res) => {
  try {
    const { matricula } = req.body;

    if (!matricula) {
      return res.status(400).json({ error: "La matrícula es requerida" });
    }

    const alumno = await Alumnos.findOne({ where: { matricula } });

    if (!alumno) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    res.status(200).json({
      alumno,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getStudentData,
};
