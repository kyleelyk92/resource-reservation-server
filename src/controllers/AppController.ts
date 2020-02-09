import DbConnection from '../dbconnection';
import { Connection } from 'typeorm';
import * as express from 'express';

export default class AppControlller {
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
