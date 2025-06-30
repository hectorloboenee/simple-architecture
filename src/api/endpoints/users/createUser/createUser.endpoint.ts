import { Endpoint } from '@architecture/routes/endpoint';
import { Bus } from '@architecture/cqrs/command/Bus';
import { inject, injectable } from 'tsyringe';
import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

@injectable()
export default class CreateUser extends Endpoint {
  private readonly bus: Bus;

  constructor(@inject('Bus') bus: Bus) {
    super();
    this.bus = bus;
  }

  run(): void {
    this.router.post('/users', async (request: Request, response: Response) => {
      const createUser: CreateUserCommand = new CreateUserCommand('hloboc', 'password1234');
      await this.bus.Dispatch(createUser);
      response.status(httpStatus.CREATED).send(createUser);
    });
  }
}
