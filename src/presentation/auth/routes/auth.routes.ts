// routes.ts
import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { buildAuthService } from "../di/auth.di";

const authService = buildAuthService();
const authController = new AuthController(authService);

const router = Router();
router.post("/login", authController.login.bind(authController));
router.post("/singup", authController.singUp.bind(authController));

export default router;
