const express = require("express");
const authController = require("../controllers/authController"); // Importa correctamente el controlador

const router = express.Router();

// Ruta para login
router.post("/login", authController.login);

module.exports = router;
