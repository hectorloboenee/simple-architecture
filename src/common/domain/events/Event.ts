export interface Event<TId> {
  aggregateId: TId;
  description: string;
  aggregateType: string;
  aggregateName: string;
}
