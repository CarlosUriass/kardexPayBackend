import { Router } from "express";
import { FoliosController } from "../controllers/folios.controller";
import { buidlFoliosService } from "../di/folios.di";

const foliosService = buidlFoliosService();

const foliosController = new FoliosController(foliosService);

const router = Router();

router.get(
  "/getAllFolios",
  foliosController.getAllFolios.bind(foliosController)
);

export default router;
