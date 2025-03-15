const express = require("express");
const CreateLoginLog = require("../controllers/LoginAuditController");

const router = express.Router();

// ruta para agregar nuevo log de inicio de sesión

router.post("/loginLog", CreateLoginLog.CreateLoginLog);

module.exports = router;
