import { AggregateRoot } from '@common/domain/AggregateRoot';
import { UserCreatedEvent } from '@domain/users/createUser/events/UserCreated.event';

export class User extends AggregateRoot<string> {
  id: string;
  username: string;
  password: string;

  constructor(id: string, username: string, password: string) {
    super();
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static create(id: string, username: string, password: string): User {
    const user = new User(id, username, password);
    user.record(new UserCreatedEvent(id, username, password));
    return user;
  }
}
