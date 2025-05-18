import { Request, Response } from "express";
import { AuthService } from "../services/Auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
      const result = await this.authService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: (error as Error).message });
    }
  };

  singUp = async (req: Request, res: Response): Promise<void> => {
    const { email, password, id_rol } = req.body;

    try {
      const result = await this.authService.signUp(email, password, id_rol);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };
}
