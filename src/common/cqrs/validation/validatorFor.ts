import { Command } from '../../cqrs/command/command';

export function ValidatorFor(commandType: new (...args: any[]) => Command) {
  return function (target: any) {
    Reflect.defineMetadata('command:validator', target, commandType);
  };
}
