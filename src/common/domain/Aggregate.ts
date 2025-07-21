import { Entity } from '@common/infraestructure/data/common/entity';
import { BaseEvent } from '@common/domain/events/Event';

export interface Aggregate<TId> extends Entity<TId> {
  getDomainEvents(): BaseEvent[];
  clearDomainEvents(): void;
}
