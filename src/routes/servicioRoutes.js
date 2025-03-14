const express = require("express");
const { getAllServicios } = require("../controllers/ServicioController");

const router = express.Router();

// Rutas para los servicios
router.get("/servicios", getAllServicios); // Obtener todos los servicios

module.exports = router;
