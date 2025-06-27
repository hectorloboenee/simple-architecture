import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Route } from '@architecture/Route';
import { injectable } from 'tsyringe';

@injectable()
export default class Test implements Route {
  registerRoutes(router: Router): void {
    router.get('/test', (req: Request, res: Response) => {
      res.status(httpStatus.OK).json({ message: 'Test' });
    });
  }
}
