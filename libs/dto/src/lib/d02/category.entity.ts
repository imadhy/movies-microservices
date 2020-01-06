import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Category')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
