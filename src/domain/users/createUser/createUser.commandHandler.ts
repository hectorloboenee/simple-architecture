import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import { HandlerFor } from '@architecture/cqrs/command/handlerFor';
import { Handler } from '@architecture/cqrs/command/handler';
import { injectable } from 'tsyringe';
import { DomainException } from '@architecture/domain/domainException';

@HandlerFor(CreateUserCommand)
export class CreateUserCommandHandler implements Handler<CreateUserCommand> {
  async Handle(command: CreateUserCommand): Promise<void> {
    throw new DomainException('Domain exception');
    // await new Promise<void>(resolve => resolve());
  }
}
