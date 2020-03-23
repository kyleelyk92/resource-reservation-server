import express = require('express');
import * as bodyParser from 'body-parser';
import { AppController } from './controllers';

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: AppController[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());

    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", '*');
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
      }
      next();
    });
  }

  private initializeControllers(controllers: AppController[]) {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
