import { CreateUserCommand } from '@domain/users/createUser/CreateUser.command';
import { CommandHandlerFor } from '@common/domain/cqrs/command/CommandHandlerFor';
import { CommandHandler } from '@common/domain/cqrs/command/CommandHandler';
import { injectable } from 'tsyringe';

import { DomainException } from '@common/domain/DomainException';
import { User } from '@domain/users/User';

@CommandHandlerFor(CreateUserCommand)
export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
  async handle(command: CreateUserCommand): Promise<void> {
    const user = User.create(command.id, command.username, command.password as string);
    await new Promise<void>(resolve => resolve());
  }
}
