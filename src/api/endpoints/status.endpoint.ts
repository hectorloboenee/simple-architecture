import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Route } from '@architecture/routes/route';
import { injectable } from 'tsyringe';

@injectable()
export default class Status implements Route {
  registerRoutes(router: Router): void {
    router.get('/', (req: Request, res: Response) => {
      res.status(httpStatus.OK).json('ok');
    });
  }
}
