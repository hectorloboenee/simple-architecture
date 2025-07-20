import { ValidatorCommandFactory } from '@common/domain/cqrs/validation/ValidatorCommandFactory';
import { Command } from '@common/domain/cqrs/command/Command';
import { CommandValidator } from '@common/domain/cqrs/validation/CommandValidator';
import { container, injectable } from 'tsyringe';

@injectable()
export class CommandValidatorFactory implements ValidatorCommandFactory {
  createValidator<TCommand extends Command>(command: TCommand): CommandValidator<TCommand> {
    const validator = Reflect.getMetadata('command:validator', command.constructor);
    if (!validator) {
      throw new Error(`${command} is not a valid command`);
    }

    container.register<CommandValidator<TCommand>>('validator', { useClass: validator });
    const instance: CommandValidator<TCommand> = container.resolve<CommandValidator<TCommand>>('validator');

    return instance;
  }
}
