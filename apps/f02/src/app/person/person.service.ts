import { Injectable } from '@nestjs/common';
import { Person } from '../interfaces';

@Injectable()
export class PersonService {
  private readonly persons: Person[] = [
    {
      id: '1',
      name: 'Quentin Tarantino',
      age: 56
    },
    {
      id: '2',
      name: 'Steven Spielberg',
      age: 73
    }
  ];

  // Retrieve Person By Id
  getPersonById(id: string): Person {
    return this.persons.find(person => person.id === id);
  }

  // Retrieve All Persons
  getAllPersons(): Person[] {
    return this.persons;
  }
}
