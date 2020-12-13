import { Router } from 'express';
import { container } from 'tsyringe';
import CoindeskBitcoinPriceIndex from '../providers/implementations/CoindeskBitcoinPriceIndex';
import UpdateCurrenciesService from '../services/UpdateCurrenciesService';

const bitcoinRouter = Router();
const updateCurrenciesService = container.resolve(UpdateCurrenciesService);
const bitcoinPriceIndex = container.resolve(CoindeskBitcoinPriceIndex);

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
