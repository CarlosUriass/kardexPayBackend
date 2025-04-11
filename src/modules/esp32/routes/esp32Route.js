const express = require("express");
const router = express.Router();
const { receiveData } = require("../controllers/esp32controller");

// Ruta POST para recibir datos desde el ESP32
router.post("/data", receiveData);

module.exports = router;
