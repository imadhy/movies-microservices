import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
// import { CategoryEntity } from '../category/category.entity';

@Entity('Movie')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category_id: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  director: number;

  @Column()
  producer: number;

  @Column()
  release: Date;

  @Column()
  synopsis: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  // @ManyToOne(() => CategoryEntity, category => category.id, { primary: true })
  // @JoinColumn({ name: 'category_id' })
  // category: Promise<CategoryEntity>;
}
