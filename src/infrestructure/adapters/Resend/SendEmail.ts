import { Resend } from "resend";
import { ISendEmails } from "./ISendEmails";
import { verifyEmailTemplate } from "../../../presentation/emails/templates/verify-email";
import { paymentDetails } from "../../../presentation/emails/templates/payment-details";

export class SendEmails implements ISendEmails {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY as string);
  }
  async sendEmailPayment(
    to: string,
    nombre: string,
    folio: string,
    direccion: string,
    nombre_tramite: string,
    costo: number,
    descuento: number,
    total: number
  ): Promise<String> {
    try {
      const response = await this.resend.emails.send({
        from: "carlos@carlosurias.com",
        to: [to],
        subject: "¡Gracias por usar KardexPay",
        html: paymentDetails(
          nombre,
          folio,
          direccion,
          nombre_tramite,
          costo,
          descuento,
          total
        ),
      });

      if (response.error) {
        console.error("Error de Resend:", response.error);
        throw new Error("No se pudo enviar el correo electronico");
      }

      return "Correo enviado con éxito";
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      throw new Error("Error al enviar el correo");
    }
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
