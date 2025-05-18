export interface IUuidGenerator {
  generateUUID(): Promise<string>;
}
