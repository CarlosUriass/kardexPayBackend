const app = require("./app");
const { connectDataBase } = require("./config/db/db.js");
const http = require("http");
const WebSocket = require("ws");

const PORT = process.env.PORT || 5001;

(async () => {
  try {
    await connectDataBase();

    const server = http.createServer(app);

    // Crear el servidor WebSocket
    const wss = new WebSocket.Server({ server });

    const clients = new Set();

    wss.on("connection", (ws) => {
      clients.add(ws);

      ws.on("close", () => {
        clients.delete(ws);
      });
    });

    // Pasar los clientes WebSocket a app (disponible en los controladores)
    app.set("wssClients", clients);

    server.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("La conexión a la base de datos falló", error);
    process.exit(1);
  }
})();
