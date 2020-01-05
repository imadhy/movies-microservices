import { Injectable } from '@nestjs/common';
import { Person } from '../interfaces';
import { PersonEntity } from '../../../../../libs/dto/src/lib/d02/person.entity';
import fetch from 'node-fetch';

@Injectable()
export class PersonService {
  private url: string = 'http://localhost:3333/api/person/';

  // Retrieve Person By Id
  async getPersonById(id: string): Promise<PersonEntity> {
    let res = await fetch(this.url + id);
    return res.json();
  }

  // Retrieve All Persons
  async getAllPersons(): Promise<PersonEntity[]> {
    let res = await fetch(this.url);
    return res.json();
  }
}
