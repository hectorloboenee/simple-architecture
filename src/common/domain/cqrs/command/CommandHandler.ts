import { Command } from '@common/domain/cqrs/command/Command';

export interface CommandHandler<TCommand extends Command> {
  handle(command: TCommand): Promise<void>;
}
