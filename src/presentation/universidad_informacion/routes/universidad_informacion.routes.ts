import { Router } from "express";
import { UniversidadInformacionController } from "../controller/universidad_informacion.controller";
import { buildUniversidadInformacionService } from "../di/universidad_informacion";

const universidadInfoService = buildUniversidadInformacionService();
const universidadInformacionController = new UniversidadInformacionController(
  universidadInfoService
);

const router = Router();

router.get(
  "/tramites",
  universidadInformacionController.getAllTramites.bind(
    universidadInformacionController
  )
);

export default router;
