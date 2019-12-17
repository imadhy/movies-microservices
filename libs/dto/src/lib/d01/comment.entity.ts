import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => User)
  @JoinColumn({ name: 'user' })
  userId: User;

  @Column()
  mediaId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  rating: number;

  @Column()
  birthday: string;

  @Column({ length: 255 })
  text: string;
}
