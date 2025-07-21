import { EventBus } from '@common/domain/events/EventBus';
import { DomainEvent } from '@common/domain/events/DomainEvent';
import { inject } from 'tsyringe';
import { EventHadler } from '@common/domain/events/EventHadler';
import { HandlerEventFactory } from '@common/domain/events/HandlerEventFactory';
import { BaseEvent } from '@common/domain/events/Event';

export class InMemoryEventBus implements EventBus {
  constructor(@inject('HandlerEventFactory') private _eventHandlerFactory: HandlerEventFactory) {}

  async publish<TEvent extends BaseEvent>(event: TEvent): Promise<void> {
    if (event === null) {
      throw new Error('Invalid event provided');
    }

    const eventHandlers: EventHadler<TEvent>[] = this._eventHandlerFactory.createHandler(event);
    for (const handler of eventHandlers) {
      await handler.handle(event);
    }
  }
}
