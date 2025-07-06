import { exec } from 'child_process';
import root from '../../../../root';
import { glob } from 'glob';
import { MigrationCommand } from '@architecture/data/migrations/commands/migrationCommand';

class RunMigrationCommand implements MigrationCommand {
  private readonly dataSource: string;
  private directory: string = `${root.DATA_DIRNAME}`;

  constructor(name: string) {
    this.dataSource = `${name}.datasource-config.ts`;
  }

  validate(): boolean {
    if (!this.dataSource) {
      throw new Error(`Migration name doesn't exist`);
    }

    // you just have to find one
    const dataSources: string[] = glob.sync(`${this.directory}/**/*.datasource-config.ts`);

    if (dataSources.length > 1) {
      throw new Error(`you just have to find one`);
    }

    if (dataSources.length === 0) {
      throw new Error(`you don't have datasource config`);
    }

    const dataSource = dataSources.find(d => d === `${this.directory}/${this.dataSource}`);
    if (!dataSource) {
      throw new Error(`you don't have datasource config with ${this.dataSource}`);
    }

    return true;
  }

  exec(): void {
    if (this.validate()) {
      const command = `pnpm ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run --dataSource ${this.directory}/${this.dataSource}`;
      exec(command, (err, stdout, stderr) => {
        if (err) {
          throw new Error(`Error running migration: ${err}`);
        }

        if (!err) {
          console.log(`Running migrations`);
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
  using myInstance = new RunMigrationCommand(arg);
  myInstance.exec();
}

runCommand();
