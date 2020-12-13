export interface ICryptoProvider {
  getToken(): string;
  verify(token: string): boolean;
}
