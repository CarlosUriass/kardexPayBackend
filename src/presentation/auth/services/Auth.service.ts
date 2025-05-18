import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { IPasswordHasher } from "../../../infrestructure/adapters/Bcrypt/IPasswordHashed";
import { IJwt } from "../../../infrestructure/adapters/jwt/IJwt";
import { ISendEmails } from "../../../infrestructure/adapters/Resend/ISendEmails";
import { IUuidGenerator } from "../../../infrestructure/adapters/uuid/IUuidGenerator";

export class AuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordHasher: IPasswordHasher,
    private readonly tokenGenerator: IJwt,
    private readonly uuidGenerator: IUuidGenerator,
    private readonly emailSender: ISendEmails
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return "Usuario no encontrado";

    const validPassword = await this.passwordHasher.compare(
      password,
      user.password
    );
    if (!validPassword) throw new Error("Contraseña incorrecta");

    const payload = {
      id: user.id,
      email: user.email,
      role: user.idRol,
    };

    const token = await this.tokenGenerator.generateToken(payload);

    return token as string;
  }

  async signUp(
    email: string,
    password: string,
    id_rol: number
  ): Promise<string> {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (user) return "Ya existe un usuario con ese correo electrónico";

      const uuid = await this.uuidGenerator.generateUUID();
      const hashPassword = await this.passwordHasher.hash(password);

      const newUser = await this.userRepository.createNewUser(
        uuid,
        email,
        hashPassword,
        id_rol
      );

      const token = await this.tokenGenerator.generateToken({
        id: uuid,
        email,
      });

      const confirmUrl = `http://localhost:3000/api/auth/verify-email?token=${token}`;

      await this.emailSender.sendEmailVerification(email, confirmUrl);
      return "Usuario creado con éxito";
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      return "Ocurrió un error al registrar el usuario";
    }
  }

  async verifyEmail(token: string): Promise<void> {
    try {
      const payload = await this.tokenGenerator.verifyToken(token);

      if (!payload || typeof payload !== "object" || !("id" in payload)) {
        throw new Error("Token inválido o sin ID");
      }

      const { id } = payload as { id: string };

      const user = await this.userRepository.verifyEmail(id);

      if (!user) {
        throw new Error("No se pudo verificar el correo electrónico");
      }
    } catch (error) {
      console.error("Error en verifyEmail:", error);
      throw new Error("Verificación de correo fallida");
    }
  }
}
