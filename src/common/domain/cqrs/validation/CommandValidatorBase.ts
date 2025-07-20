import { Command } from '../command/Command';
import { Schema } from 'yup';
import { CommandValidator } from './CommandValidator';

export abstract class CommandValidatorBase<TCommand extends Command> implements CommandValidator<TCommand> {
  protected schema!: Schema;

  protected constructor(object: Schema) {
    this.schema = object;
  }

  async validate(command: TCommand): Promise<boolean> {
    await this.schema.validate(command);
    return await this.schema.isValid(command);
  }
}
