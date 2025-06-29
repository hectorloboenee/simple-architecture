import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { injectable } from 'tsyringe';
import { Endpoint } from '@architecture/routes/endpoint';

@injectable()
export default class GetUsers extends Endpoint {
  run(): void {
    this.router.get('/users', (request: Request, response: Response) => {
      response.status(httpStatus.OK).send({ message: 'Users' });
    });
  }
}
