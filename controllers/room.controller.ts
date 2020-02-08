import HttpController from './HttpController';
import * as express from 'express';
import { Room } from '../src/entity';

export default class RoomController extends HttpController {
  public path = '/rooms';
  public router = express.Router();

  getAllRooms(res: express.Response) {
    const rooms = this.db.getRepository(Room).find();
    res.send(rooms);
  }
  createARoom = (request: express.Request, response: express.Response) => {
    const room: Room = request.body;
    this.db.getRepository(Room).save(room);
    response.send(room);
  }
}
