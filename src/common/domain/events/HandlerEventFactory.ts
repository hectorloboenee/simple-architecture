import { DomainEvent } from '@common/domain/events/DomainEvent';
import { EventHadler } from '@common/domain/events/EventHadler';

export interface HandlerEventFactory {
  createHandler<TEvent extends DomainEvent>(event: TEvent): EventHadler<TEvent>;
}
