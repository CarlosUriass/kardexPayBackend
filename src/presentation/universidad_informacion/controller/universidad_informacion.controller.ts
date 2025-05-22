import { Request, Response } from "express";
import { UniversidadInformacionService } from "../services/universidad_informacion.service";

export class UniversidadInformacionController {
  constructor(
    private readonly UniversidadInformacionService: UniversidadInformacionService
  ) {}

  getAllTramites = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.UniversidadInformacionService.getAllTramites();

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal error server" });
    }
  };
}
