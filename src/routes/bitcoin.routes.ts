import { Router } from 'express';
import AxiosNetwork from '../network/AxiosNetwork';
import CoindeskBitcoinPriceIndex from '../providers/implementations/CoindeskBitcoinPriceIndex';
import GetCurrenciesService from '../services/GetCurrenciesService';

const bitcoinRouter = Router();
const getCurrenciesService = new GetCurrenciesService();
const network = new AxiosNetwork('https://api.coindesk.com/v1/bpi');
const bitcoinPriceIndex = new CoindeskBitcoinPriceIndex(
  getCurrenciesService,
  network,
);

bitcoinRouter.get('/', async (request, response) => {
  const priceIndex = await bitcoinPriceIndex.getCurrentPrice();

  return response.json(priceIndex);
});

export default bitcoinRouter;
