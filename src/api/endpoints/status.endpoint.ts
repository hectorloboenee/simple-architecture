import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '@architecture/controller';

export class Endpoint implements Controller {}

export const register = (router: Router) => {
  router.get('/', (req: Request, res: Response) => {
    res.status(httpStatus.OK).json('ok');
  });
};
