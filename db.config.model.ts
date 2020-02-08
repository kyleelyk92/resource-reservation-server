import { DatabaseType } from 'typeorm';

export interface DbConfig {
  type: 'mysql' | 'mariadb';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
}
