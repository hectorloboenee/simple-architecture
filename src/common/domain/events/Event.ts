export interface BaseEvent {
  description: string;
  aggregateType: string;
  aggregateName: string;
}

export interface BaseDomainEvent<TId> extends BaseEvent {
  aggregateId: TId;
}
