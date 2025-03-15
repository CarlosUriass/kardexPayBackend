const Usuario = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  // Login del usuario
  async login(req, res) {
    try {
      const { correo, password } = req.body;

      // Verificar si el usuario existe
      const user = await Usuario.findOne({ where: { correo } });
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      // Verificar la contraseña
      const passwordMatch = await bcrypt.compare(password, user.password_hash);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }

      // Generar un JWT para el usuario
      const token = jwt.sign(
        { id_usuario: user.id_usuario, correo: user.correo, rol: user.rol }, // Payload (datos que deseas incluir en el token)
        process.env.JWT_SECRET, // Clave secreta para firmar el token
        { expiresIn: "1h" } // Tiempo de expiración del token (en este caso 1 hora)
      );

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
