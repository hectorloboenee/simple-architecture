import { Command } from '@architecture/cqrs/command/command';

export function HandlerFor(commandType: new (...args: any[]) => Command) {
  console.log('registro');
  return function (target: any) {
    Reflect.defineMetadata('command:handler', target, commandType);
  };
}
