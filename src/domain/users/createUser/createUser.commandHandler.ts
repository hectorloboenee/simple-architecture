import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import { HandlerFor } from '@common/cqrs/command/handlerFor';
import { Handler } from '@common/cqrs/command/handler';
import { injectable } from 'tsyringe';
import { DomainException } from '@common/domain/domainException';

@HandlerFor(CreateUserCommand)
export class CreateUserCommandHandler implements Handler<CreateUserCommand> {
  async Handle(command: CreateUserCommand): Promise<void> {
    throw new DomainException('Domain exception');
    // await new Promise<void>(resolve => resolve());
  }
}
