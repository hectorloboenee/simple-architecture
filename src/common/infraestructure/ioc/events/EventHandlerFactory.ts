import { HandlerEventFactory } from '@common/domain/events/HandlerEventFactory';
import { DomainEvent } from '@common/domain/events/DomainEvent';
import { EventHadler } from '@common/domain/events/EventHadler';
import { container, injectable } from 'tsyringe';
import { BaseEvent } from '@common/domain/events/Event';

@injectable()
export class EventHandlerFactory implements HandlerEventFactory {
  createHandler<TEvent extends BaseEvent>(event: TEvent): EventHadler<TEvent>[] {
    const handlers: any = Reflect.getMetadata('event:handler', event.constructor);
    if (!handlers || handlers.length == 0) {
      throw new Error('No event handler found.');
    }

    const handlersList: EventHadler<TEvent>[] = [];

    handlers.forEach((handler: any) => {
      container.register<EventHadler<TEvent>>('EventHandler', { useClass: handler });
      const instance: EventHadler<TEvent> = container.resolve<EventHadler<TEvent>>('EventHandler');
      handlersList.push(instance);
    });

    return handlersList;
  }
}
