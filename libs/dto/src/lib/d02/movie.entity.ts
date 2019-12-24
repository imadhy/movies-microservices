import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { PersonEntity } from './person.entity';
import { CategoryEntity } from './category.entity';

@Entity('Movie')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  release: Date;

  @Column()
  synopsis: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToMany(type => PersonEntity)
  @JoinTable()
  actors: PersonEntity[];

  @ManyToMany(type => PersonEntity)
  @JoinTable()
  producers: PersonEntity[];

  @ManyToMany(type => PersonEntity)
  @JoinTable()
  directors: PersonEntity[];

  @ManyToMany(type => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[];
}
