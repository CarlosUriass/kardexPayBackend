const { generateJWT } = require("../../../plugins");
const Usuarios = require("../models/usersModels");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usuarios.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // preparar el JWT

    const rol = user.rol;
    const id_oficina = user.id_oficina;

    const payload = {
      rol,
      id_oficina,
    };

    const token = generateJWT(payload, "30m");

    res.status(200).json({
      token,
      message: "Acceso concedido",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred on the server." });
  }
};

module.exports = {
  login,
};
