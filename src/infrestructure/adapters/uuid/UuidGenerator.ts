import { IUuidGenerator } from "./IUuidGenerator";
import { v4 as uuidv4, v4 } from "uuid";

export class UuidGenerator implements IUuidGenerator {
  async generateUUID(): Promise<string> {
    return uuidv4();
  }
}
