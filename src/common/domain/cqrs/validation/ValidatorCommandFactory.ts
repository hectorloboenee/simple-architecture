import { CommandValidator } from './CommandValidator';
import { Command } from '../command/Command';

export interface ValidatorCommandFactory {
  createValidator<TCommand extends Command>(command: TCommand): CommandValidator<TCommand>;
}
