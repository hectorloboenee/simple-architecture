import { DomainEvent } from '@common/domain/events/DomainEvent';
import { EventHadler } from '@common/domain/events/EventHadler';

export interface HandlerFactory {
  createHandler<TEvent extends DomainEvent>(event: TEvent): EventHadler<TEvent>;
}
