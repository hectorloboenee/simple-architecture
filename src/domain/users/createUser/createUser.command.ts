import { Command } from '@architecture/cqrs/command/command';

export class CreateUserCommand implements Command {
  constructor(
    public id: string,
    public username: string,
    public pasword: string
  ) {}
}
