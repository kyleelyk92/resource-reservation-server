import 'reflect-metadata';
import { createConnection, DatabaseType, Connection, Repository } from 'typeorm';
import * as dbconfig from '../database.config.json';
import User from './entity/User.entity.js';
import Room from './entity/room.entity.js';

export default class DbConnection {
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
      entities: [Room, User],
      synchronize: true,
    });
    return connection;
  }
}
