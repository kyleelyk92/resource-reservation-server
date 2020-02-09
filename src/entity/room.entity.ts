import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Room {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  roomNumber?: number;

  @Column('text')
  roomName?: string;

  @Column('date')
  createdAt: Date;
}
