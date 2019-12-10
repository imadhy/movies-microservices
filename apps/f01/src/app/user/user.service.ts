import { Injectable } from '@nestjs/common';
import { User, Message } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 'b09d5d6f-3fe2-4bd9-8946-0880b29e173f',
        first_name: 'john',
        last_name: 'changeme',
        admin: false
      },
      {
        id: '40b67496-b180-4046-ade0-76511bdc193c',
        first_name: 'chris',
        last_name: 'secret',
        admin: false
      },
      {
        id: '2d9662ca-31e6-4229-9e22-ea5f37820853',
        first_name: 'maria',
        last_name: 'guess',
        admin: true
      }
    ];
  }

  async findAll(): Promise<User[]> {
      return this.users;
  }

  async addUser(user: UserInput): Promise<Message> {
    this.users.push({
      id: uuid(),
      first_name: user.first_name,
      last_name: user.last_name,
      country: user.country,
      birthday: user.birthday,
      gender: user.gender,
      admin: false
    });
    return {
      message: 'Your account is successfully created.',
      type: 'Info',
      status: 201
    };
  }

  async getUserByUserId(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async delete(id: string): Promise<Message> {
    this.users.splice(this.users.findIndex(user => user.id === id), 1);
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
