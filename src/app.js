const express = require("express");
const cors = require("cors");

const loginRouter = require("./modules/auth/routes/loginRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware para JSON
app.use(express.json());

// rutas

app.use("/auth", loginRouter); // Ruta para login bajo /auth

module.exports = app;
