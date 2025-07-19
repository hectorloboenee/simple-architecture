import { exec } from 'child_process';
import root from '../../../../root';
import { MigrationCommand } from '@common/data/migrations/commands/migrationCommand';

class CreateMigrationCommand implements MigrationCommand {
  private readonly name!: string;
  private directory: string = `${root.DATA_DIRNAME}/migrations`;

  constructor(name: string) {
    this.name = name;
  }

  validate(): boolean {
    if (!this.name) {
      throw new Error(`Migration name doesn't exist`);
    }
    return true;
  }

  exec(): void {
    if (this.validate()) {
      const command = `pnpm typeorm-ts-node-commonjs migration:create ${this.directory}/${this.name}`;
      exec(command, (err, stdout, stderr) => {
        if (err) {
          throw new Error(`Error creating migration: ${err}`);
        }

        if (!err) {
          console.log(`Creating ${this.name} migration`);
          console.log(stdout);
        }
      });
    }
  }

  [Symbol.dispose]() {
    console.log('Disposed!');
  }
}

function runCommand() {
  const arg: string = process.argv[2];
  using myInstance = new CreateMigrationCommand(arg);
  myInstance.exec();
}

runCommand();
