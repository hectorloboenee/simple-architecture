import { EventHadler } from '@common/domain/events/EventHadler';
import { UserCreatedEvent } from '@domain/users/createUser/events/UserCreated.event';
import { EventHandlerFor } from '@common/domain/events/EventHandlerFor';

@EventHandlerFor(UserCreatedEvent)
export class UserCreatedEventHandler implements EventHadler<UserCreatedEvent> {
  handle(event: UserCreatedEvent): Promise<void> {
    console.log('User created 1');
    return Promise.resolve(undefined);
  }
}
