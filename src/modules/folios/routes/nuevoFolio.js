const express = require("express");
const router = express.Router();
const { nuevoFolio } = require("../controller/nuevoFolio");

router.post("/nuevo-folio", nuevoFolio);

module.exports = router;
