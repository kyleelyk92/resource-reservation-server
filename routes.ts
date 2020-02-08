import { HttpRoute } from './models/HttpRoute.model';

export const routes: HttpRoute[] = [
  new HttpRoute('/rooms', 'get', 'getAllRooms'),
];
