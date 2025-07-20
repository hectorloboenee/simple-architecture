import { container } from 'tsyringe';
import { HandlerCommandFactory } from '@common/domain/cqrs/command/HandlerCommandFactory';
import { CommandHandlerFactory } from './CommandHandlerFactory';
import { CommandBus } from '@common/domain/cqrs/command/CommandBus';
import { InMemoryCommandBus } from '@common/infraestructure/commandBus/InMemoryCommandBus';
import { InMemoryCommandBusDecorator } from '@common/infraestructure/commandBus/InMemoryCommandBusDecorator';
import { ValidatorCommandFactory } from '@common/domain/cqrs/validation/ValidatorCommandFactory';
import { CommandValidatorFactory } from './CommandValidatorFactory';

export class RegisterCqrs {
  public static register(): void {
    container.register<HandlerCommandFactory>('HandlerCommandFactory', { useClass: CommandHandlerFactory });
    container.register<ValidatorCommandFactory>('ValidatorCommandFactory', { useClass: CommandValidatorFactory });

    container.register<CommandBus>('InMemoryCommandBus', { useClass: InMemoryCommandBus });
    container.register<CommandBus>('InMemoryCommandBusDecorator', { useClass: InMemoryCommandBusDecorator });
  }
}
