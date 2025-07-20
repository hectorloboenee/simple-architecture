import { DomainEvent } from '@common/domain/events/DomainEvent';

export interface EventBus {
  publish<TEvent extends DomainEvent>(event: TEvent): Promise<void>;
}
