import { BaseEvent } from '@common/domain/events/Event';

export function EventHandlerFor(eventType: new (...args: any[]) => BaseEvent) {
  return function (target: any) {
    Reflect.defineMetadata('event:handler', target, eventType);
  };
}
