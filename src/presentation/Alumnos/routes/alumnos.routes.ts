import { Router } from "express";
import { AlumnosController } from "../controller/alumnos.controller";
import { builAlumnoService } from "../di/alumnos.di";

const alumnosService = builAlumnoService();

const alumnosController = new AlumnosController(alumnosService);

const router = Router();

router.get("/getInfoByMatricula", alumnosController.getInfo.bind(alumnosController));

export default router;
