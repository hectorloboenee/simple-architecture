import { Endpoint } from '@common/routes/endpoint';
import { Bus } from '@common/cqrs/command/Bus';
import { inject, injectable } from 'tsyringe';
import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export default class CreateUser extends Endpoint {
  constructor(@inject('SyncBusDecorator') private bus: Bus) {
    super();
    this.bus = bus;
  }

  run(): void {
    this.router.post('/users', async (request: Request, response: Response) => {
      const id: string = uuidv4();
      const createUser: CreateUserCommand = new CreateUserCommand(id, 'hloboc', 'password1234');
      await this.bus.dispatch(createUser);
      response.status(httpStatus.CREATED).json({ id: id });
    });
  }
}
