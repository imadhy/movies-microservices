import { Injectable } from '@nestjs/common';
import { User } from './Interfaces/User';

@Injectable()
export class AppService {
  user: User = {
    id: 1,
    firstName: 'Henry',
    lastName: 'MAISONNEUVE',
    email: 'maisonneuve.heuiibhfiljo',
    country: 'france',
    createdAt: new Date(),
    birthday: new Date(),
    gender: 'genderfluid',
    admin: false
  };

  getAll = () => {
    return this.user;
  };
}
