import { DomainEvent } from '@common/domain/events/DomainEvent';
import { EventHadler } from '@common/domain/events/EventHadler';
import { BaseEvent } from '@common/domain/events/Event';

export interface HandlerEventFactory {
  createHandler<TEvent extends BaseEvent>(event: TEvent): EventHadler<TEvent>[];
}
