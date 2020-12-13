import { container } from 'tsyringe';
import { ICryptoProvider } from '../providers/ICryptoProvider';

import CustomCryptoProvider from '../providers/implementations/CustomCryptoProvider';
import AuthenticateUserService from '../services/AuthenticateUserService';
import EnsureAuthenticateUserService from '../services/EnsureAuthenticateUserService';
const tokens: string[] = [];

container.register<string[]>('Tokens', { useValue: tokens });

container.registerSingleton<ICryptoProvider>(
  'ICryptoProvider',
  CustomCryptoProvider,
);
container.registerSingleton<AuthenticateUserService>(
  'AuthenticateUserService',
  AuthenticateUserService,
);
container.registerSingleton<EnsureAuthenticateUserService>(
  'EnsureAuthenticateUserService',
  EnsureAuthenticateUserService,
);
