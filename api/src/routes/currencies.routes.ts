import { Router } from 'express';
import { container } from 'tsyringe';
import GetCurrenciesService from '../services/GetCurrenciesService';

const currenciesRouter = Router();
const getCurrenciesService = container.resolve(GetCurrenciesService);

currenciesRouter.get('/', async (request, response) => {
  const currencies = await getCurrenciesService.execute();

  return response.json(currencies);
});

export default currenciesRouter;
