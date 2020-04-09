import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import Room from './Room.entity';
import User from './User.entity';

Entity()
export class Projector {
  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(() => Room, { eager: true })
  public room!: Room;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_projectors',
    joinColumn: { name: 'projector_id' },
    inverseJoinColumn: { name: 'user_id' },
  })
  public user: User;



  /*
  assigned room -- one to one
  model number;
  in-use
  */
}