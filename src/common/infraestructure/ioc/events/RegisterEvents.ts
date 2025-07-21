import { container } from 'tsyringe';
import { HandlerEventFactory } from '@common/domain/events/HandlerEventFactory';
import { EventHandlerFactory } from '@common/infraestructure/ioc/events/EventHandlerFactory';
import { EventBus } from '@common/domain/events/EventBus';
import { InMemoryEventBus } from '@common/infraestructure/EventBus/InMemoryEventBus';

export class RegisterEvents {
  static register(): void {
    container.register<HandlerEventFactory>('HandlerEventFactory', { useClass: EventHandlerFactory });
    container.register<EventBus>('InMemoryEventBus', { useClass: InMemoryEventBus });
  }
}
