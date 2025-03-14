const Usuario = require("../models/user");
const bcrypt = require("bcrypt");

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

      // Si todo está correcto
      res.status(200).json({
        id_usuario: user.id_usuario,
        correo: user.correo,
        rol: user.rol,
        mensaje: "Login exitoso",
      });
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = authController;
