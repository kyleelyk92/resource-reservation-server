import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Room {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber?: number;

  @Column()
  roomName?: string;

  @Column()
  createdAt: Date;
}
