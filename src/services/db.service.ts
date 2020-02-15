import { Connection, getRepository, createConnection } from 'typeorm';
import { DbConfig } from '../../db.config.model';

export default class DbService {
  constructor(public Db: Connection) {
    this.setDb();
  }
  public getDatabase(dbConfig: DbConfig) {
    return {
      type: dbConfig.type,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: dbConfig.entities,
    };
  }

  private async setDb() {
    this.Db = await createConnection();
  }
}
