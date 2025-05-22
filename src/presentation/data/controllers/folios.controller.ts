import { Request, Response } from "express";
import { FoliosService } from "../services/folios.service";

export class FoliosController {
  constructor(private readonly foliosService: FoliosService) {}

  getAllFolios = async (req: Request, res: Response): Promise<void> => {
    const { id_unidad_academica } = req.query;

    if (!id_unidad_academica) {
      res.status(400).json({
        message: "id_unidad_academica requerido",
      });
      return;
    }

    try {
      const result =
        await this.foliosService.getAllFolios(+id_unidad_academica);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
