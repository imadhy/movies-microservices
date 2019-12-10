import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  first_name: string;

  @Column({ length: 255 })
  last_name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  country: string;

  @Column()
  created_at: Date;

  @Column()
  birthday: Date;

  @Column({ length: 255 })
  gender: string;

  @Column()
  admin: boolean;
}
