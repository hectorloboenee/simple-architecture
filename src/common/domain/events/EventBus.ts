import { BaseEvent } from '@common/domain/events/Event';

export interface EventBus {
  publish<TEvent extends BaseEvent>(event: TEvent): Promise<void>;
}
