import { DomainEvent } from '@common/domain/events/DomainEvent';

export interface EventHadler<TEvent> {
  handle(event: TEvent): Promise<void>;
}
