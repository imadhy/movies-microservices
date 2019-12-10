
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  country: string;

  @Column()
  created_at: Date;
  
  @Column()
  birthday: Date;

  @Column()
  gender: string;

  @Column()
  admin: boolean;
}