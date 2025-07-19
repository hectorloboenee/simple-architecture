import { Command } from '../../cqrs/command/command';

export function HandlerFor(commandType: new (...args: any[]) => Command) {
  return function (target: any) {
    Reflect.defineMetadata('command:handler', target, commandType);
  };
}
