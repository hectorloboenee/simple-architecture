import { DomainEvent } from '@common/domain/events/DomainEvent';

export interface EventHadler<TEvent extends DomainEvent> {
  handle(event: TEvent): Promise<void>;
}
