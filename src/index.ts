import App from './app';
import RoomController from '../controllers/room.controller';
import HttpController from '../controllers/HttpController';

const app = new App(
  [
    new HttpController(),
    new RoomController(),
  ],
  5000,
);

app.listen();
