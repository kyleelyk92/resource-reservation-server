import { HttpRoute } from './src/models/HttpRoute.model';

export const routes: HttpRoute[] = [
  new HttpRoute('/rooms', 'get', 'getAllRooms'),
];
