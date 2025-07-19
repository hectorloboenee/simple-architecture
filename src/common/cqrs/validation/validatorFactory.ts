import { Validator } from '../../cqrs/validation/validator';
import { Command } from '../../cqrs/command/command';

export interface ValidatorFactory {
  createValidator<TCommand extends Command>(command: TCommand): Validator<TCommand>;
}
