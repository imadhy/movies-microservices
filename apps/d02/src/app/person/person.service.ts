import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonEntity } from './person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDTO } from '@movie-ms/dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private PersonRepository: Repository<PersonEntity>
  ) {}

  async showAll() {
    return await this.PersonRepository.find();
  }

  async create(data: MovieDTO) {
    const order = await this.PersonRepository.create(data);
    await this.PersonRepository.save(order);
    return order;
  }

  async show(id: string) {
    return await this.PersonRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<MovieDTO>) {
    return await this.PersonRepository.update({ id }, data);
  }

  async destroy(id: string) {
    await this.PersonRepository.delete({ id });
    return { delete: true };
  }
}
