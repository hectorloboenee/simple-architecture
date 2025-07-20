import { CommandValidator } from './CommandValidator';
import { Command } from '../command/Command';

export interface ValidatorFactory {
  createValidator<TCommand extends Command>(command: TCommand): CommandValidator<TCommand>;
}
