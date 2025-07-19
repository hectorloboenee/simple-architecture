import { Command } from '@common/cqrs/command/command';

export class CreateUserCommand implements Command {
  constructor(
    public id: string,
    public username: string,
    public password?: string
  ) {}
}
