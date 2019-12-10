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

  postUser = (req, res) => {
    var newUser: User = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      createdAt: new Date(),
      birthday: new Date(),
      gender: req.body.gender,
      admin: false
    };
    return newUser
  }

  

  getAll = () => {
    return this.user;
  };

}
