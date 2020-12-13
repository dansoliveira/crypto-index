import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import './configs/dotenv';
import './containers';
import routes from './routes';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use((request, response) => {
  response.status(404).json({
    message: 'Endpoint não encontrado',
  });
});

app.listen(PORT, () => {
  console.log(`🪙 Crypto Index API started on port ${PORT}`);
});
