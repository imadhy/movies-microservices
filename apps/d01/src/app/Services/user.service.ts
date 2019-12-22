import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { User } from '../../../../../libs/dto/src/lib/d01/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepo.query('SELECT * FROM users');
  }

  async insert(user: User) {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }

  async update(user: User, id: string) {
    return getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        country: user.country,
        gender: user.gender,
        birthday: user.birthday
      })
      .where('id = :id', { id })
      .execute();
  }

  async findByID(id) {
    return this.userRepo.query('SELECT * FROM users WHERE id = $1', [id]);
  }

  async deleteByID(id) {
    return this.userRepo.query('DELETE FROM users WHERE id = $1', [id]);
  }
}
