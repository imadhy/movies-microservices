import { Injectable } from '@nestjs/common';
import { UserDTO, MessageDTO } from '@movie-ms/dto';
import { SigninInput } from './inputs/signin.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
    private readonly users: Partial<UserDTO>[];

    constructor(
    ) {
        this.users = [
            {
              id: "b09d5d6f-3fe2-4bd9-8946-0880b29e173f",
              firstname: 'john',
              lastname: 'changeme',
              email: 'john.changeme@xyz.com',
              password: 'nuggets',
              auth: ''
            },
            {
              id: "40b67496-b180-4046-ade0-76511bdc193c",
              firstname: 'chris',
              lastname: 'secret',
              email: 'chris.secret@xyz.com',
              password: 'nuggets',
              auth: ''
            },
            {
              id: "2d9662ca-31e6-4229-9e22-ea5f37820853",
              firstname: 'maria',
              lastname: 'guess',
              email: 'maria.guess@xyz.com',
              password: 'nuggets',
              auth: ''
            },
          ];
    }

    async findAll(): Promise<Partial<UserDTO>[]>  {
        return this.users;
    }

    async create(signin: SigninInput): Promise<Partial<UserDTO>> {
        let user: Partial<UserDTO> = {
            id: uuid(),
            firstname: signin.firstname,
            lastname: signin.lastname,
            email: signin.email,
            password: signin.password,
            auth: ''
        }
        this.users.push(user);
        return user;
    }

    async findOneById(id: string): Promise<Partial<UserDTO> | undefined> {
        return this.users.find(user => user.id === id);
    }

    async findOneByEmail(email: string): Promise<Partial<UserDTO> | undefined> {
        return this.users.find(user => user.email === email);
    }

    async update(id: string, data: Partial<UserDTO>) {
        let user = this.users.find(user => user.id === id);
        return;
    }

    async delete(id: string): Promise<MessageDTO> {
        this.users.splice(this.users.findIndex(user => user.id === id),1);
        return { message: 'Your account is successfully deleted.', type: "Info", status: 200 };
    }
}
