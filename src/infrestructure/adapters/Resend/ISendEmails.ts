export interface ISendEmails {
  sendEmailVerification(to: string, confirmUrl: string): Promise<String>;
}
