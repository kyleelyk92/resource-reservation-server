import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Projector } from './projector';

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  firstName!: string;

  @Column('text')
  lastName!: string;

  @Column('int')
  age!: number;

  @ManyToMany(() => Projector)
  public projector!: Projector;
}
