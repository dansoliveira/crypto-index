import { inject, injectable } from 'tsyringe';

import { ICryptoProvider } from '../providers/ICryptoProvider';

@injectable()
class EnsureAuthenticateUserService {
  constructor(
    @inject('ICryptoProvider') private cryptoProvider: ICryptoProvider,
  ) {}

  public async execute(token: string): Promise<void> {
    if (!token || token.length !== 16) {
      throw new Error('Token inválido');
    }

    const matchedToken: Array<string> = token.match(/[a-zA-Z0-9]+/) || [];

    const isValidFormat = matchedToken[0].length === 16;

    if (!isValidFormat) {
      throw new Error('Token inválido');
    }

    const tokenExists = this.cryptoProvider.verify(token);

    if (!tokenExists) {
      throw new Error('Token inválido');
    }
  }
}

export default EnsureAuthenticateUserService;
