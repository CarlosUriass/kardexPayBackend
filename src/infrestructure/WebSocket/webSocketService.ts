import WebSocket, { WebSocketServer } from "ws";
import { IWebSocketService } from "../../domain/services/IWebSocketService";

export class WebSocketService implements IWebSocketService {
  private wss: WebSocketServer;
  private clients: Map<string, WebSocket> = new Map();

  constructor(server: import("http").Server) {
    this.wss = new WebSocketServer({ server });

    this.wss.on("connection", (ws: WebSocket) => {
      const clientId = this.generateClientId();
      this.clients.set(clientId, ws);

      ws.on("close", () => {
        this.clients.delete(clientId);
      });

      ws.on("message", (data) => {
        console.log(`Mensaje recibido de ${clientId}: ${data}`);
      });
    });
  }

  sendMessageToClient(clientId: string, message: string): void {
    const client = this.clients.get(clientId);
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }

  broadcastMessage(message: string): void {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  private generateClientId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
