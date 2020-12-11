import { Router } from 'express';
import CustomCryptoProvider from '../providers/implementations/CustomCryptoProvider';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();
const cryptoProvider = new CustomCryptoProvider();
const authenticateUserService = new AuthenticateUserService(cryptoProvider);

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const token = await authenticateUserService.execute({
      email,
      password,
    });

    return response.json({ token });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default sessionsRouter;
