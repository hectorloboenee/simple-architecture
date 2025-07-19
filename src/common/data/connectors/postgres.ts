import { DataSource, DataSourceOptions } from 'typeorm';
import { CodeFirstDataContext } from '../../data/typeorm/codeFirstDataContext';

export class Connector {
  public static setup(dataSourceOptions: DataSourceOptions): DataSource {
    return new CodeFirstDataContext(dataSourceOptions);
  }
}
