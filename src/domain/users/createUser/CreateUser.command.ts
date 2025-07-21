import { Command } from '@common/domain/cqrs/command/Command';

export class CreateUserCommand implements Command {
  constructor(
    public id: string,
    public username: string,
    public password?: string
  ) {}
}
