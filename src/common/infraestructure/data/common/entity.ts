import { ObjectLiteral } from 'typeorm';

export interface Entity<T> {
  id: T;
}
