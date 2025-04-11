const express = require("express");
const cors = require("cors");
const loginRouter = require("./modules/auth/routes/loginRoutes");
const getStudentDataRouter = require("./modules/alumnos/routes/AlumnosRoutes");
const esp32Routes = require("./modules/esp32/routes/esp32Route");
const tramitesRoutes = require("./modules/tramites/routes/tramitesRoutes");

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
app.use("/api", tramitesRoutes);

module.exports = app;
