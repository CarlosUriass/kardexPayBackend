const express = require("express");
const cors = require("cors");
const loginRouter = require("./modules/auth/routes/loginRoutes");
const getStudentDataRouter = require("./modules/alumnos/routes/AlumnosRoutes");
const esp32Routes = require("./modules/esp32/routes/esp32Route");

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
app.use("/api/esp32", esp32Routes);

module.exports = app;
