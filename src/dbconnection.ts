import 'reflect-metadata';
import { createConnection, DatabaseType, Connection, Repository } from 'typeorm';
import * as dbconfig from '../database.config.json';

export class DbConnection {
  constructor() {
  }

  public async connection(): Promise<Connection> {
    const dbType: DatabaseType = 'mysql';
    const connection: Connection = await createConnection({
      type: dbType,
      host: dbconfig.db.mysql.host,
      port: dbconfig.db.mysql.port,
      username: dbconfig.db.mysql.username,
      password: dbconfig.db.mysql.password,
      database: dbconfig.db.mysql.database,
      entities: ['./entity/*.js'],
      synchronize: true,
    });
    return connection;
  }
}
