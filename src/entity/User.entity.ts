import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    type: 'text',
    length: 100,
  })
  name: string;

  @Column('text')
  email: string;

  @Column('boolean')
  isVerified: boolean;
}
