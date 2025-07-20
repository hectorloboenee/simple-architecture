import { Entity } from '@common/infraestructure/data/common/entity';
import { DomainEvent } from '@common/domain/events/DomainEvent';

export interface Aggregate<TId> extends Entity<TId> {
  getDomainEvents(): DomainEvent[];

  clearDomainEvents(): void;
}
