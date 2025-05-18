export interface IPasswordHasher {
  compare(plainText: string, hashed: string): Promise<boolean>;
  hash(plainText: string): Promise<string>;
}
