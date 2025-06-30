import { Command } from '@architecture/cqrs/command/command';
import { ValidatorBase } from '@architecture/cqrs/validation/validatorBase';
import { CreateUserCommand } from '@domain/users/createUser/createUser.command';
import { object, Schema, string } from 'yup';
import { ValidatorFor } from '@architecture/cqrs/validation/validatorFor';

@ValidatorFor(CreateUserCommand)
export class CreateUserValidator extends ValidatorBase<CreateUserCommand> {
  constructor() {
    const schema: Schema = object({
      id: string().required(),
      username: string().required(),
      password: string().required()
    });
    super(schema);
  }
}
