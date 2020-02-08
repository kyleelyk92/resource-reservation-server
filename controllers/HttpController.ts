import DbConnection from '../src/dbconnection';
import { Connection } from 'typeorm';
import * as express from 'express';

export default class HttpController {
  public path = '/';
  public router = express.Router();

  public db: Connection;
  constructor() {
    this.makeConnection();
  }

  makeConnection() {
    new DbConnection().connection().then(c => {
      this.db = c;
    });
  }
}
