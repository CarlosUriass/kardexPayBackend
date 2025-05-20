import { Router } from "express";
import authRoutes from "./auth/routes/auth.routes";
import alumnosRoutes from "./Alumnos/routes/alumnos.routes";
import universidadRoutes from "./universidad_informacion/routes/universidad_informacion.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", authRoutes);
    router.use("/api/alumnos", alumnosRoutes);
    router.use("/api/universidad", universidadRoutes);

    return router;
  }
}
