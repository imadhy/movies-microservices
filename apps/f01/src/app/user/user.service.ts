import { Injectable, HttpService } from '@nestjs/common';
import { User, Message } from '@movie-ms/dto';
import { UserInput } from './inputs/user.input';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor(private readonly http: HttpService) {
    // this.users = [
    //   {
    //     id: 'b09d5d6f-3fe2-4bd9-8946-0880b29e173f',
    //     first_name: 'john',
    //     last_name: 'changeme',
    //     admin: false
    //   },
    //   {
    //     id: '40b67496-b180-4046-ade0-76511bdc193c',
    //     first_name: 'chris',
    //     last_name: 'secret',
    //     admin: false
    //   },
    //   {
    //     id: '2d9662ca-31e6-4229-9e22-ea5f37820853',
    //     first_name: 'maria',
    //     last_name: 'guess',
    //     admin: true
    //   }
    // ];
  }

  async findAll(): Promise<Observable<AxiosResponse<User[]>>> {
    return this.http
      .get('http://localhost:3003/api/user/get/all')
      .toPromise()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  async addUser(user: UserInput): Promise<User> {
    this.http
      .post('http://localhost:3003/api/user/post', user)
      .toPromise()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
    return user;
  }

  async getUserByUserId(
    id: string
  ): Promise<Observable<AxiosResponse<User[]>>> {
    return this.http
      .get('http://localhost:3003/api/user/get/' + id)
      .toPromise()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  async deleteUser(id: string): Promise<Message> {
    this.http
      .delete('http://localhost:3003/api/user/delete/' + id)
      .toPromise()
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
    return {
      message: 'Your account is successfully deleted.',
      type: 'Info',
      status: 200
    };
  }
}
