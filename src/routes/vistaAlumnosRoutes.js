const express = require("express");
const { encontrarAlumno } = require("../controllers/vistaAlumnosController"); // Importa correctamente el controlador

const router = express.Router();

router.get("/encontraralumno", encontrarAlumno); // Usa el controlador aquí

module.exports = router;
