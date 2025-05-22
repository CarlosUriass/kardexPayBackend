export interface ISendEmails {
  sendEmailVerification(to: string, confirmUrl: string): Promise<String>;
  sendEmailPayment(
    to: string,
    nombre: string,
    folio: string,
    direccion: string,
    nombre_tramite: string,
    costo: number,
    descuento: number,
    total: number
  ): Promise<String>;
}
