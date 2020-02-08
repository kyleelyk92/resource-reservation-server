import DbConnection from './dbconnection';
import { Connection } from 'typeorm';

const connection: Promise<Connection> = new DbConnection().connection().then(c => {
  if (!!c) {
    return c;
  }
});
