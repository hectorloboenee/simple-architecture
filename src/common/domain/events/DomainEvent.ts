import { Event } from '@common/domain/events/Event';
import { string } from 'yup';

export class DomainEvent implements Event<string> {
  aggregateId: string;
  private _aggregateName!: string;
  private _aggregateType!: string;
  private _description!: string;

  constructor(aggregateId: string) {
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
