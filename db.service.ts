import { DbConfig } from './db.config.model';

export default class DbService {
  constructor() {

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
}
