import { DataSource, DataSourceOptions } from 'typeorm';
import { injectable } from 'tsyringe';
import { SourceData } from '@common/infraestructure/data/typeorm/SourceData';

@injectable()
export class CodeFirstDataContext extends DataSource implements SourceData {
  constructor(options: DataSourceOptions) {
    super(options);
  }

  async init(): Promise<void> {
    try {
      await this.initialize();
      console.log('Initialized code first data');
    } catch (error) {
      console.error(error);
    }
  }
}
