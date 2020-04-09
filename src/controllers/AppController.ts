import { DbConnection } from '../dbconnection';
import { Connection } from 'typeorm';
import * as express from 'express';

export class AppController {
  public path = '/';
  public router = express.Router();

  public db: Connection;
  constructor() {
    this.makeConnection();

    this.router.get('/', () => 'Hello World');
    this.router.post('/', (req: express.Request, res: express.Response) => {
      res.send("Hit the post");
    })
  }


  makeConnection() {
    new DbConnection().connection().then(c => {
      this.db = c;
    });
  }
}
