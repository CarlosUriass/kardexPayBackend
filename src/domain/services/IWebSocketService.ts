export interface IWebSocketService {
  sendMessageToClient(clientId: string, message: string): void;
  broadcastMessage(message: string): void;
}
