import { Command } from '@architecture/cqrs/command/command';

export class CreateUserCommand implements Command {
  public username: string;
  public password: string;

  constructor(username: string, pasword: string) {
    this.username = username;
    this.password = pasword;
  }
}
