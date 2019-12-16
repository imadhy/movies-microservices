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

  async deleteByID(id) {
    await this.userRepo.query('DELETE FROM users WHERE id = $1', [id]);
  }
}
