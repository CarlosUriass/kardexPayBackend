const express = require("express");
const cors = require("cors");

const loginRouter = require("./modules/auth/routes/loginRoutes");
const getStudentDataRouter = require("./modules/alumnos/routes/AlumnosRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware para JSON
app.use(express.json());

// rutas

app.use("/auth", loginRouter);
app.use("/api", getStudentDataRouter);

module.exports = app;
