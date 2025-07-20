import { Command } from './Command';

export interface CommandBus {
  dispatch<TCommand extends Command>(command: TCommand): Promise<void>;
}
