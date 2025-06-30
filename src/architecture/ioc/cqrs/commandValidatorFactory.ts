import { ValidatorFactory } from '@architecture/cqrs/validation/validatorFactory';
import { Command } from '@architecture/cqrs/command/command';
import { Validator } from '@architecture/cqrs/validation/validator';
import { container, injectable } from 'tsyringe';

@injectable()
export class CommandValidatorFactory implements ValidatorFactory {
  CreateValidator<TCommand extends Command>(command: TCommand): Validator<TCommand> {
    const validator = Reflect.getMetadata('command:validator', command.constructor);
    if (!validator) {
      throw new Error(`${command} is not a valid command`);
    }

    container.register<Validator<TCommand>>('validator', { useClass: validator });
    const instance: Validator<TCommand> = container.resolve<Validator<TCommand>>('validator');

    return instance;
  }
}
