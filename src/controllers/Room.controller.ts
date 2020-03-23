import { AppController } from './index';
import * as express from 'express';
import Room from '../entity/Room.entity';
import { Request, Response } from 'express';

export class RoomController extends AppController {
  public path = '/rooms';
  public router = express.Router();

  constructor() {
    super();
    this.router.get('/rooms', async (req: Request, res: Response) => {
      console.log('in the room router, getting the rooms');
      const rooms = await this.db.getRepository(Room).find()
      console.log(rooms);
      return res.send(rooms);
    })
    this.router.post('/rooms', (req: Request, res: Response) => {
      const saved_room = this.db.getRepository(Room).save(req.body);
      return res.send(saved_room);
    });
  }

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
