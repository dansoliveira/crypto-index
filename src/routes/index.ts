import { Router } from 'express';

import sessionsRouter from './sessions.routes';
import bitcoinRouter from './bitcoin.routes';

const routes = Router();

routes.use('/login', sessionsRouter);
routes.use('/crypto/btc', bitcoinRouter);

export default routes;
