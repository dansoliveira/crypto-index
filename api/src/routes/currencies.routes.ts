import { Router } from 'express';
import GetCurrenciesService from '../services/GetCurrenciesService';

const currenciesRouter = Router();
const getCurrenciesService = new GetCurrenciesService();

currenciesRouter.get('/', async (request, response) => {
  const currencies = await getCurrenciesService.execute();

  return response.json(currencies);
});

export default currenciesRouter;
