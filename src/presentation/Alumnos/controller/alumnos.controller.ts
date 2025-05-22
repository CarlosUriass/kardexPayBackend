import { Request, Response } from "express";
import { AlumnoService } from "../services/alumnos.service";

export class AlumnosController {
  constructor(private readonly AlumnoService: AlumnoService) {}

  getInfo = async (req: Request, res: Response): Promise<void> => {
    const { matricula } = req.query;

    if (!matricula || typeof matricula !== "string") {
      res
        .status(400)
        .json({ message: "La matrícula es requerida y debe ser un string" });
      return;
    }

    try {
      const result = await this.AlumnoService.getInfo(matricula);
      res.status(200).json({ result });
    } catch (error) {
      console.error("Error en getInfo:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
