import * as yup from 'yup';

import { ICryptoProvider } from '../providers/ICryptoProvider';

interface AuthenticateUserDTO {
  email: string;
  password: number;
}

class AuthenticateUserService {
  constructor(private cryptoProvider: ICryptoProvider) {}

  public async execute({
    email,
    password,
  }: AuthenticateUserDTO): Promise<string> {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup
          .string()
          .required()
          .length(6)
          .matches(/^\d+$/, 'Permitido somente números'),
      });

      await schema.validate({
        email,
        password,
      });
    } catch (err) {
      throw new Error('Campos inválidos');
    }

    return this.cryptoProvider.getToken();
  }
}

export default AuthenticateUserService;
