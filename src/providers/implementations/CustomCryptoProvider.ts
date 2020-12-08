import { ICryptoProvider } from '../ICryptoProvider';

class CustomCryptoProvider implements ICryptoProvider {
  private tokenSize = 16;

  /**
   * Function provided by zerOOne.
   * https://stackoverflow.com/a/58326357
   */
  public getToken(): string {
    return [...Array(this.tokenSize)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
  }
}

export default CustomCryptoProvider;
