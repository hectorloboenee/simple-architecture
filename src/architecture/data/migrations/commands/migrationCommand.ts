export interface MigrationCommand {
  validate(): boolean;
  exec(): void;
}
