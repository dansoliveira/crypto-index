import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import EnsureAuthenticateUserService from '../services/EnsureAuthenticateUserService';

const ensureAuthenticatedUserService = container.resolve(
  EnsureAuthenticateUserService,
);

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization || '';

  try {
    await ensureAuthenticatedUserService.execute(authHeader);

    next();
  } catch (err) {
    response.status(401).json({ message: err.message });
  }
}
