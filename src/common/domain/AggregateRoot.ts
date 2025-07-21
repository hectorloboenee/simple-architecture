import { DomainEvent } from '@common/domain/events/DomainEvent';
import { Aggregate } from '@common/domain/Aggregate';
import { BaseEvent } from '@common/domain/events/Event';

export abstract class AggregateRoot<TId> implements Aggregate<TId> {
  abstract id: TId;
  private domainEvents: BaseEvent[] = [];

  getDomainEvents(): BaseEvent[] {
    return [...this.domainEvents.slice()];
  }

  clearDomainEvents(): void {
    this.domainEvents = [];
  }

  protected record(event: BaseEvent): void {
    this.domainEvents.push(event);
  }
}
