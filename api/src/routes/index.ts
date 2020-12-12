import { Router } from 'express';

import sessionsRouter from './sessions.routes';
import bitcoinRouter from './bitcoin.routes';
import currenciesRouter from './currencies.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/login', sessionsRouter);
routes.use('/crypto/btc', ensureAuthenticated, bitcoinRouter);
routes.use('/currencies', ensureAuthenticated, currenciesRouter);

export default routes;
