import { CommandValidatorBase } from '@common/domain/cqrs/validation/CommandValidatorBase';
import { CreateUserCommand } from '@domain/users/createUser/CreateUser.command';
import { object, Schema, string } from 'yup';
import { CommandValidatorFor } from '@common/domain/cqrs/validation/CommandValidatorFor';

@CommandValidatorFor(CreateUserCommand)
export class CreateUserValidator extends CommandValidatorBase<CreateUserCommand> {
  constructor() {
    const schema: Schema = object({
      id: string().required(),
      username: string().required(),
      password: string().min(8).required()
    });
    super(schema);
  }
}
