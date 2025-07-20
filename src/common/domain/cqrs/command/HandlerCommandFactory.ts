import { Command } from './Command';
import { CommandHandler } from './CommandHandler';

export interface HandlerCommandFactory {
  createHandler<TCommand extends Command>(command: TCommand): CommandHandler<TCommand>;
}
