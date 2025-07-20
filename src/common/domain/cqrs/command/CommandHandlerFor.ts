import { Command } from './Command';

export function CommandHandlerFor(commandType: new (...args: any[]) => Command) {
  return function (target: any) {
    Reflect.defineMetadata('command:handler', target, commandType);
  };
}
