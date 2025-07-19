import { container } from 'tsyringe';
import { HandlerFactory } from '../../cqrs/command/handlerFactory';
import { CommandHandlerFactory } from '../../ioc/cqrs/commandHandlerFactory';
import { Bus } from '../../cqrs/command/Bus';
import { SyncBus } from '../../cqrs/command/syncBus';
import { SyncBusDecorator } from '../../cqrs/validation/syncBusDecorator';
import { ValidatorFactory } from '../../cqrs/validation/validatorFactory';
import { CommandValidatorFactory } from '../../ioc/cqrs/commandValidatorFactory';

export class RegisterCqrs {
  public static register(): void {
    container.register<HandlerFactory>('HandlerFactory', { useClass: CommandHandlerFactory });
    container.register<ValidatorFactory>('ValidatorFactory', { useClass: CommandValidatorFactory });

    container.register<Bus>('SyncBus', { useClass: SyncBus });
    container.register<Bus>('SyncBusDecorator', { useClass: SyncBusDecorator });
  }
}
