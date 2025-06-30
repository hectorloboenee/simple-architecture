import { container } from 'tsyringe';
import { HandlerFactory } from '@architecture/cqrs/command/handlerFactory';
import { CommandHandlerFactory } from '@architecture/ioc/cqrs/commandHandlerFactory';
import { Bus } from '@architecture/cqrs/command/Bus';
import { SyncBus } from '@architecture/cqrs/command/syncBus';
import { SyncBusDecorator } from '@architecture/cqrs/validation/syncBusDecorator';
import { ValidatorFactory } from '@architecture/cqrs/validation/validatorFactory';
import { CommandValidatorFactory } from '@architecture/ioc/cqrs/commandValidatorFactory';

export class RegisterCqrs {
  public static register(): void {
    container.register<HandlerFactory>('HandlerFactory', { useClass: CommandHandlerFactory });
    container.register<ValidatorFactory>('ValidatorFactory', { useClass: CommandValidatorFactory });

    container.register<Bus>('SyncBus', { useClass: SyncBus });
    container.register<Bus>('SyncBusDecorator', { useClass: SyncBusDecorator });
  }
}
