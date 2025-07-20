import { DomainEvent } from '@common/domain/events/DomainEvent';

export interface EventPublisher {
  publish<TEvent extends DomainEvent>(event: TEvent): Promise<void>;
}
