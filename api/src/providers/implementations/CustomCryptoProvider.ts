import { inject, injectable } from 'tsyringe';
import { ICryptoProvider } from '../ICryptoProvider';

@injectable()
class CustomCryptoProvider implements ICryptoProvider {
  private tokenSize = 16;

  constructor(@inject('Tokens') private tokens: string[]) {}

  /**
   * Function provided by zerOOne.
   * https://stackoverflow.com/a/58326357
   */
  public getToken(): string {
    const token = [...Array(this.tokenSize)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');

    this.tokens.push(token);

    return token;
  }

  public verify(token: string): boolean {
    if (!this.tokens.includes(token)) {
      return false;
    }

    return true;
  }
}

export default CustomCryptoProvider;
