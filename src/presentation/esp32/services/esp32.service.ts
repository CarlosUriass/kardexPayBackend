import { IWebSocketService } from "../../../domain/services/IWebSocketService";

export class Esp32Service {
  constructor(private readonly websocketService: IWebSocketService) {}

  async enviarMonto(amount: number): Promise<string> {
    const messageObject = { amount };

    const messageJson = JSON.stringify(messageObject);

    this.websocketService.broadcastMessage(messageJson);

    return `Monto ${amount} enviado por WebSocket`;
  }
}
