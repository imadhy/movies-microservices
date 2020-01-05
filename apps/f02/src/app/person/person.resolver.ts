import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from '../interfaces';

@Resolver('Person')
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query()
  async person(@Args('id') id: string) {
    return await this.personService.getPersonById(id);
  }

  @Query()
  async persons() {
    return await this.personService.getAllPersons();
  }

  @Mutation()
  async createPerson(@Args('person') person) {
    return await this.personService.createPerson(person);
  }
}
