import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Person')
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;
}
