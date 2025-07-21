import { BaseDomainEvent } from '@common/domain/events/Event';

export class DomainEvent<T> implements BaseDomainEvent<T> {
  aggregateId: T;
  private _aggregateName!: string;
  private _aggregateType!: string;
  private _description!: string;

  constructor(aggregateId: T) {
    this.aggregateId = aggregateId;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  get aggregateType(): string {
    return this._aggregateType;
  }

  set aggregateType(value: string) {
    this._aggregateType = value;
  }
  get aggregateName(): string {
    return this._aggregateName;
  }

  set aggregateName(value: string) {
    this._aggregateName = value;
  }
}
