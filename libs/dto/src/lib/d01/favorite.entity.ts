import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'favorites' })
export class Favorite {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'user' })
  userId: User;

  @Column()
  mediaId: string;
}
