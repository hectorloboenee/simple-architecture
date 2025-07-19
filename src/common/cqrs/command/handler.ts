export interface Handler<TCommand> {
  handle(command: TCommand): Promise<void>;
}
