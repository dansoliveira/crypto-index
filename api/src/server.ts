import express from 'express';

import routes from './routes';

const PORT = 3333;
const app = express();

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
