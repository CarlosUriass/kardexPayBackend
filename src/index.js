const app = require("./app");
const { connectDataBase } = require("./config/db/db.js");

const PORT = process.env.PORT || 5001;

(async () => {
  try {
    await connectDataBase();
    app.listen(PORT, () => {
      console.log("Servidor corriendo");
    });
  } catch (error) {
    console.error("La conexión a la base de datos falló");
    process.exit(1);
  }
})();
