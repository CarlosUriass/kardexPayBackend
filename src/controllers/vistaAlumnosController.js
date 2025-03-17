const VistaAlumnos = require("../models/vistaAlumnos");

const encontrarAlumno = async (req, res) => {
  try {
    const { matricula } = req.query; // Obtener matrícula desde query params

    if (!matricula) {
      return res
        .status(400)
        .json({ error: "Se requiere la matrícula del alumno" });
    }

    const alumno = await VistaAlumnos.findOne({ where: { matricula } });

    if (!alumno) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    res.json(alumno);
  } catch (error) {
    console.error("Error al buscar el alumno:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { encontrarAlumno };
