import { Command } from '../../cqrs/command/command';
import { Schema } from 'yup';
import { Validator } from '../../cqrs/validation/validator';

export abstract class ValidatorBase<TCommand extends Command> implements Validator<TCommand> {
  protected schema!: Schema;

  protected constructor(object: Schema) {
    this.schema = object;
  }

  async validate(command: TCommand): Promise<boolean> {
    await this.schema.validate(command);
    return await this.schema.isValid(command);
  }
}
