import "reflect-metadata";
import App from './app';
import RoomController from './controllers/room.controller';
import AppController from './controllers/AppController';


const app = new App(
  [
    new AppController(),
    new RoomController(),
  ],
  5000,
);

app.listen();
