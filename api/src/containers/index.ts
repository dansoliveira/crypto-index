import { container } from 'tsyringe';
import AxiosNetwork from '../network/AxiosNetwork';
import { INetwork } from '../network/INetwork';
import { ICryptoProvider } from '../providers/ICryptoProvider';

import CoindeskBitcoinPriceIndex from '../providers/implementations/CoindeskBitcoinPriceIndex';
import CustomCryptoProvider from '../providers/implementations/CustomCryptoProvider';
import AuthenticateUserService from '../services/AuthenticateUserService';
import EnsureAuthenticateUserService from '../services/EnsureAuthenticateUserService';
import GetCurrenciesCalculatedService from '../services/GetCurrenciesCalculatedService';
import UpdateCurrenciesService from '../services/UpdateCurrenciesService';

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

container.registerInstance<INetwork>(
  'INetwork',
  new AxiosNetwork('https://api.coindesk.com/v1/bpi'),
);

container.registerSingleton<GetCurrenciesCalculatedService>(
  'GetCurrenciesCalculatedService',
  GetCurrenciesCalculatedService,
);
container.registerSingleton<UpdateCurrenciesService>(
  'UpdateCurrenciesService',
  UpdateCurrenciesService,
);
container.registerSingleton<CoindeskBitcoinPriceIndex>(
  'CoindeskBitcoinPriceIndex',
  CoindeskBitcoinPriceIndex,
);
