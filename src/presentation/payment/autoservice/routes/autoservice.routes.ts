import { Router } from "express";
import { AutoserviceController } from "../controller/autoservice.controller";
import { buildAutoserviceService } from "../di/autoservice.di";

const autoserviceService = buildAutoserviceService();
const autoserviceController = new AutoserviceController(autoserviceService);

const router = Router();

router.post(
  "/generate-folio",
  autoserviceController.generateFolio.bind(autoserviceController)
);

export default router;
