import { Resend } from "resend";
import { ISendEmails } from "./ISendEmails";
import { verifyEmailTemplate } from "../../../presentation/emails/templates/verify-email";

export class SendEmails implements ISendEmails {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY as string);
  }

  async sendEmailVerification(to: string, confirmUrl: string): Promise<string> {
    try {
      const response = await this.resend.emails.send({
        from: "carlos@carlosurias.com",
        to: [to],
        subject: "Verifica tu correo electrónico",
        html: verifyEmailTemplate(confirmUrl),
      });

      if (response.error) {
        console.error("Error de Resend:", response.error.message);
        throw new Error("No se pudo enviar el correo de verificación");
      }

      return `Correo enviado con éxito`;
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      throw new Error("Error al enviar el correo");
    }
  }
}
