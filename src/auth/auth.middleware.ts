import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }

    const token = authHeader.split(' ')[1];

    if (token !== 'meuToken') {
      throw new UnauthorizedException('Token inválido');
    }

    next(); // Se o token for válido, continua para o próximo middleware ou controlador
  }
}
