export interface Handler<TCommand> {
  Handle(command: TCommand): Promise<void>;
}
