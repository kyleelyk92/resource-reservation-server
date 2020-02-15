import DbService from './db.service';
import Room from '../entity/Room.entity';

export default class RoomService {
  constructor(private dbService: DbService) {

  }

  public getAllRooms() {
    return this.dbService.Db.getRepository(Room).find();
  }
}