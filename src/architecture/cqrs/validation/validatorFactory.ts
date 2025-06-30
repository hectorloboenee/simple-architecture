import { Validator } from '@architecture/cqrs/validation/validator';
import { Command } from '@architecture/cqrs/command/command';

export interface ValidatorFactory {
  CreateValidator<TCommand extends Command>(command: TCommand): Validator<TCommand>;
}
