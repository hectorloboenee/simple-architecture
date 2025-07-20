import { CommandBus } from '../../domain/cqrs/command/CommandBus';
import { Command } from '../../domain/cqrs/command/Command';
import { inject, injectable } from 'tsyringe';
import { ValidatorFactory } from '../../domain/cqrs/validation/ValidatorFactory';

@injectable()
export class InMemoryCommandBusDecorator implements CommandBus {
  constructor(
    @inject('InMemoryCommandBus') private _commandBus: CommandBus,
    @inject('ValidatorFactory') private _validatorFactory: ValidatorFactory
  ) {}

  async dispatch<TCommand extends Command>(command: TCommand): Promise<void> {
    const commandValidator = this._validatorFactory.createValidator(command);
    const isValid = await commandValidator.validate(command);
    if (isValid) {
      await this._commandBus.dispatch(command);
    }
  }
}
