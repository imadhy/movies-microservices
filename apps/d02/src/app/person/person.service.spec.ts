import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from './person.service';

describe('PersonService', () => {
  let person: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonService]
    }).compile();

    person = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(person).toBeDefined();
  });
});
