import { DataSource } from 'typeorm';
import 'dotenv/config';
import root from '../root';
import { env } from '../environment';
import { Connector } from '@common/infraestructure/data/connectors/postgres';

const postgresDatasourceConfig: DataSource = Connector.setup({
  type: 'postgres',
  host: env.DATABASE_HOST || 'localhost',
  port: env.DATABASE_PORT || 5432,
  username: env.DATABASE_USER || 'root',
  database: env.DATABASE || 'postgres',
  password: env.DATABASE_PASSWORD || 'password1234',
  entities: [''],
  migrations: [`${root.DATA_DIRNAME}/migrations/**/*.ts`]
});

export default postgresDatasourceConfig;
