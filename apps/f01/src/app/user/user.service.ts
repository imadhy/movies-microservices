import { Injectable } from '@nestjs/common';
import { UserDTO, MessageDTO } from '@movie-ms/dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  private readonly users: UserDTO[];

  constructor() {
    this.users = [
      {
        id: 'b09d5d6f-3fe2-4bd9-8946-0880b29e173f',
        firstname: 'john',
        lastname: 'changeme',
        email: 'john.changeme@xyz.com',
        password: 'nuggets',
        auth: 'user'
      },
      {
        id: '40b67496-b180-4046-ade0-76511bdc193c',
        firstname: 'chris',
        lastname: 'secret',
        email: 'chris.secret@xyz.com',
        password: 'nuggets',
        auth: 'user'
      },
      {
        id: '2d9662ca-31e6-4229-9e22-ea5f37820853',
        firstname: 'maria',
        lastname: 'guess',
        email: 'maria.guess@xyz.com',
        password: 'nuggets',
        auth: 'admin'
      }
    ];
  }

  async findAll(): Promise<UserDTO[]> {
    return this.users;
  }

  async create(user: UserDTO): Promise<MessageDTO> {
    this.users.push({
      id: uuid(),
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      auth: 'user'
    });
    return {
      message: 'Your account is successfully created.',
      type: 'Info',
      status: 201
    };
  }

  async findOneById(id: string): Promise<UserDTO | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findOneByEmail(email: string): Promise<UserDTO | undefined> {
    return this.users.find(user => user.email === email);
  }

  async update(id: string, data: UserDTO) {
    let user = this.users.find(user => user.id === id);
    return; // Update
  }

  async delete(id: string): Promise<MessageDTO> {
    this.users.splice(this.users.findIndex(user => user.id === id), 1);
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
