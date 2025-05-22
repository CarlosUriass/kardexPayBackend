import express, { Router } from "express";
import cors from "cors";
import http from "http";
import { WebSocketService } from "../infrestructure/WebSocket/webSocketService";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  private httpServer!: http.Server;
  private websocketService!: WebSocketService;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async start() {
    this.middlewares();

    this.app.use(this.routes);

    this.httpServer = http.createServer(this.app);

    this.websocketService = new WebSocketService(this.httpServer);

    this.httpServer.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }

  public getWebSocketService(): WebSocketService {
    return this.websocketService;
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}
