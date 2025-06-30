import { Command } from '@architecture/cqrs/command/command';
import { Schema } from 'yup';
import { Validator } from '@architecture/cqrs/validation/validator';

export abstract class ValidatorBase<TCommand extends Command> implements Validator<TCommand> {
  protected schema!: Schema;

  protected constructor(object: Schema) {
    this.schema = object;
  }

  async validate(command: TCommand): Promise<boolean> {
    return await this.schema.isValid(command);
  }
}
