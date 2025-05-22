import { Request, Response } from "express";
import { AutoserviceService } from "../services/autoservice.service";

export class AutoserviceController {
  constructor(private readonly autoserviceService: AutoserviceService) {}

  generateFolio = async (req: Request, res: Response): Promise<void> => {
    const { matricula, tramite, email, descuento, pago } = req.body;

    try {
      const result = await this.autoserviceService.generarFolio(
        matricula,
        tramite,
        email,
        descuento,
        pago
      );

      res.status(200).json({
        message: "Folio creado correctamente",
        folio: result,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message || "Error al generar el folio",
      });
    }
  };
}
