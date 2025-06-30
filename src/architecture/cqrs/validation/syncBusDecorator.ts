import { Bus } from '@architecture/cqrs/command/Bus';
import { Command } from '@architecture/cqrs/command/command';
import { inject, injectable } from 'tsyringe';
import { ValidatorFactory } from './validatorFactory';

@injectable()
export class SyncBusDecorator implements Bus {
  constructor(
    @inject('SyncBus') private bus: Bus,
    @inject('ValidatorFactory') private validatorFactory: ValidatorFactory
  ) {}

  async Dispatch<TCommand extends Command>(command: TCommand): Promise<void> {
    const commandValidator = this.validatorFactory.CreateValidator(command);
    const isValid = await commandValidator.validate(command);
    if (!isValid) {
      throw new Error('Command not pass the validation');
    }
    await this.bus.Dispatch(command);
  }
}
