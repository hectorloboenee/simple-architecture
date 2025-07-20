import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import { CommandHandlerFor } from '@common/domain/cqrs/command/CommandHandlerFor';
import { CommandHandler } from '@common/domain/cqrs/command/CommandHandler';
import { injectable } from 'tsyringe';

import { DomainException } from '@common/domain/DomainException';

@CommandHandlerFor(CreateUserCommand)
export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
  async handle(command: CreateUserCommand): Promise<void> {
    throw new DomainException('Domain exception');
    // await new Promise<void>(resolve => resolve());
  }
}
