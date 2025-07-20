import { container } from 'tsyringe';
import { HandlerFactory } from '@common/domain/cqrs/command/HandlerFactory';
import { CommandHandlerFactory } from './CommandHandlerFactory';
import { CommandBus } from '@common/domain/cqrs/command/CommandBus';
import { InMemoryCommandBus } from '@common/infraestructure/commandBus/InMemoryCommandBus';
import { InMemoryCommandBusDecorator } from '@common/infraestructure/commandBus/InMemoryCommandBusDecorator';
import { ValidatorFactory } from '@common/domain/cqrs/validation/ValidatorFactory';
import { CommandValidatorFactory } from './CommandValidatorFactory';

export class RegisterCqrs {
  public static register(): void {
    container.register<HandlerFactory>('HandlerFactory', { useClass: CommandHandlerFactory });
    container.register<ValidatorFactory>('ValidatorFactory', { useClass: CommandValidatorFactory });

    container.register<CommandBus>('InMemoryCommandBus', { useClass: InMemoryCommandBus });
    container.register<CommandBus>('InMemoryCommandBusDecorator', { useClass: InMemoryCommandBusDecorator });
  }
}
