const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db"); // Importar la función de conexión
const servicioRoutes = require("./src/routes/servicioRoutes"); // Rutas de servicios

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// permitir conexión con el frontend

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de servicios
app.use("/api", servicioRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
