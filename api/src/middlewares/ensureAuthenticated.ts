import { NextFunction, Request, Response } from 'express';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader || authHeader.length !== 16) {
    response.status(401).json({ message: 'Token inválido' });
    return;
  }

  const matchedToken: Array<string> = authHeader.match(/[a-zA-Z0-9]+/) || [];

  const isValidFormat = matchedToken[0].length === 16;

  if (!isValidFormat) {
    response.status(401).json({ message: 'Token inválido' });
    return;
  }

  next();
}
