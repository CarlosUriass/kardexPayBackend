import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

import { Esp32Service } from "./presentation/esp32/services/esp32.service";
import { Esp32Controller } from "./presentation/esp32/controller/esp32.controller";
import { Router } from "express";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  await server.start();

  const wsService = server.getWebSocketService();

  const esp32Service = new Esp32Service(wsService);
  const esp32Controller = new Esp32Controller(esp32Service);

  const esp32Router = Router();
  esp32Router.post("/esp32/monto", esp32Controller.obtenerMonto);

  server.addRouter(esp32Router);
}
