import express from 'express';

import routes from './routes';

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Welcome do Crypto Index!' });
});

app.listen(PORT, () => {
  console.log(`🪙 Crypto Index API started on port ${PORT}`);
});
