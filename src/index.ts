import "reflect-metadata";
import App from './app';
import {
  RoomController,
  AppController
} from './controllers';


const app = new App(
  [
    new AppController(),
    new RoomController(),
  ],
  5000,
);

app.listen();
