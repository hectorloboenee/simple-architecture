import { DomainEvent } from '@common/domain/events/DomainEvent';
import { Aggregate } from '@common/domain/Aggregate';

export abstract class AggregateRoot<TId> implements Aggregate<TId> {
  abstract id: TId;
  private domainEvents: DomainEvent[] = [];

  getDomainEvents(): DomainEvent[] {
    return [...this.domainEvents.slice()];
  }

  clearDomainEvents(): void {
    this.domainEvents = [];
  }

  record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }
}
