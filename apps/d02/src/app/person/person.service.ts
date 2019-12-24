import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'libs/dto/src/lib/d02/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private PersonRepository: Repository<PersonEntity>
  ) {}

  async showAll() {
    return await this.PersonRepository.find();
  }

  async create(data) {
    const order = await this.PersonRepository.create(data);
    await this.PersonRepository.save(order);
    return order;
  }

  async show(id: string) {
    return await this.PersonRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<PersonEntity>) {
    return await this.PersonRepository.update({ id }, data);
  }

  async destroy(id: string) {
    await this.PersonRepository.delete({ id });
    return { delete: true };
  }
}
