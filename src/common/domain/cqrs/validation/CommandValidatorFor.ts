import { Command } from '../command/Command';

export function CommandValidatorFor(commandType: new (...args: any[]) => Command) {
  return function (target: any) {
    Reflect.defineMetadata('command:validator', target, commandType);
  };
}
