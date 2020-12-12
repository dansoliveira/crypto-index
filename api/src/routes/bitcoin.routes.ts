import { Router } from 'express';
import AxiosNetwork from '../network/AxiosNetwork';
import CoindeskBitcoinPriceIndex from '../providers/implementations/CoindeskBitcoinPriceIndex';
import GetCurrenciesCalculatedService from '../services/GetCurrenciesCalculatedService';
import UpdateCurrenciesService from '../services/UpdateCurrenciesService';

const bitcoinRouter = Router();
const getCurrenciesCalculatedService = new GetCurrenciesCalculatedService();
const updateCurrenciesService = new UpdateCurrenciesService();
const network = new AxiosNetwork('https://api.coindesk.com/v1/bpi');
const bitcoinPriceIndex = new CoindeskBitcoinPriceIndex(
  getCurrenciesCalculatedService,
  network,
);

bitcoinRouter.get('/', async (request, response) => {
  const priceIndex = await bitcoinPriceIndex.getCurrentPrice();

  return response.json(priceIndex);
});

bitcoinRouter.post('/', async (request, response) => {
  try {
    const { currency, value } = request.body;

    await updateCurrenciesService.execute({
      currency,
      value,
    });

    return response.json({ message: 'Valor alterado com sucesso!' });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default bitcoinRouter;
