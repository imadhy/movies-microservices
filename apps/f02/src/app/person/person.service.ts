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

  // Create Person
  async createPerson(person: PersonEntity): Promise<PersonEntity> {
    let res = await fetch(this.url, {
      method: 'post',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  }

  // Update Person
  async updatePerson(id: string, person: PersonEntity): Promise<PersonEntity> {
    let res = await fetch(this.url + id, {
      method: 'put',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  }

  // Delete Person
  async deletePerson(id: string): Promise<PersonEntity> {
    let res = await fetch(this.url + id, {
      method: 'delete'
    });
    return res.json();
  }
}
