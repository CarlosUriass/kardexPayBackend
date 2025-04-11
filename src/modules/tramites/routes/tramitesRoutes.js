const express = require("express");
const { obtenerTramites } = require("../controller/tramitesController");

const router = express.Router();

router.get("/getServices", obtenerTramites);

module.exports = router;
