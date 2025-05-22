import { Request, Response } from "express";
import { Esp32Service } from "../services/esp32.service";

export class Esp32Controller {
  constructor(private readonly esp32Service: Esp32Service) {}

  obtenerMonto = async (req: Request, res: Response): Promise<void> => {
    const { amount } = req.body;

    try {
      const result = await this.esp32Service.enviarMonto(amount);
      res.status(200).json({ message: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal error server" });
    }
  };
}
