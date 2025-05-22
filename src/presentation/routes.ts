import { Router } from "express";
import authRoutes from "./auth/routes/auth.routes";
import alumnosRoutes from "./Alumnos/routes/alumnos.routes";
import universidadRoutes from "./universidad_informacion/routes/universidad_informacion.routes";
import autoservicePayments from "./payment/autoservice/routes/autoservice.routes";
import foliosData from "./data/routes/folios.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", authRoutes);
    router.use("/api/alumnos", alumnosRoutes);
    router.use("/api/universidad", universidadRoutes);
    router.use("/api/payments/autoservice", autoservicePayments);
    router.use("/api/data/folios", foliosData);

    return router;
  }
}
