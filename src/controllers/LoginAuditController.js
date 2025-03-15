const LoginAudit = require("../models/loginAudit"); // Importar el modelo

// Crear nuevo log de intento de sesión
const CreateLoginLog = async (req, res) => {
  try {
    const { correo, ip, estatus, agent } = req.body;

    // Crear un nuevo registro en la tabla login_audit
    const newLoginLog = await LoginAudit.create({
      correo,
      ip,
      estatus,
      agent,
    });

    return res.status(201).json({
      message: "Intento de inicio de sesión registrado correctamente",
      data: newLoginLog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al guardar el intento de inicio de sesión",
      error: error.message,
    });
  }
};

module.exports = { CreateLoginLog };
