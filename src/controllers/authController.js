const Usuario = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginAudit = require("../models/loginAudit"); // Importar el modelo de logs

const authController = {
  // Login del usuario
  async login(req, res) {
    try {
      const { correo, password } = req.body;
      const ip = req.ip; // Obtener la IP desde la solicitud
      const agent = req.get("User-Agent"); // Obtener el agente del usuario (navegador, etc.)

      // Verificar si el usuario existe
      const user = await Usuario.findOne({ where: { correo } });
      let loginStatus = false; // Inicialmente, no ha accedido

      if (!user) {
        // Si el usuario no existe, no guardamos un log de éxito, solo de fallo
        await LoginAudit.create({
          correo,
          ip,
          estatus: loginStatus,
          agent,
        });
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      // Verificar la contraseña
      const passwordMatch = await bcrypt.compare(password, user.password_hash);
      if (!passwordMatch) {
        // Si la contraseña es incorrecta, guardamos el log como fallido
        await LoginAudit.create({
          correo,
          ip,
          estatus: loginStatus,
          agent,
        });
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }

      // Si la contraseña es correcta, se genera el JWT
      const token = jwt.sign(
        { id_usuario: user.id_usuario, correo: user.correo, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Cambiar el estado a 'true' porque el login fue exitoso
      loginStatus = true;

      // Guardar el log de inicio de sesión exitoso
      await LoginAudit.create({
        correo,
        ip,
        estatus: loginStatus,
        agent,
      });

      // Si todo está correcto, enviar el token al cliente
      res.status(200).json({
        token, // El token generado
        mensaje: "Login exitoso",
      });
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = authController;
