import { DomainEvent } from '@common/domain/events/DomainEvent';

export class UserCreatedEvent extends DomainEvent<string> {
  username: string;
  password: string;

  constructor(aggregateId: string, username: string, password: string) {
    super(aggregateId);
    this.username = username;
    this.password = password;
  }
}
