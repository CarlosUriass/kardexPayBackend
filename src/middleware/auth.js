const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso denegado, token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Aquí se usa "token" correctamente
    req.user = decoded; // Asignar los datos del usuario decodificados a la solicitud
    next(); // Continuar al siguiente middleware o controlador
  } catch (error) {
    res.status(400).json({ message: "Token inválido." });
  }
};

module.exports = verifyToken;
