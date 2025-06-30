import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import { HandlerFor } from '@architecture/cqrs/command/handlerFor';
import { Handler } from '@architecture/cqrs/command/handler';
import { injectable } from 'tsyringe';

@HandlerFor(CreateUserCommand)
export class CreateUserCommandHandler implements Handler<CreateUserCommand> {
  async Handle(command: CreateUserCommand): Promise<void> {
    console.log(command);
    await new Promise<void>(resolve => resolve());
  }
}
