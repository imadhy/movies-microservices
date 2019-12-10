import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MovieEntity } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDTO } from '@movie-ms/dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private MovieRepository: Repository<MovieEntity>
  ) {}

  async showAll() {
    return await this.MovieRepository.find();
  }

  async create(data: MovieDTO) {
    const order = await this.MovieRepository.create(data);
    await this.MovieRepository.save(order);
    return order;
  }

  async show(id: string) {
    return await this.MovieRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<MovieDTO>) {
    return await this.MovieRepository.update({ id }, data);
  }

  async destroy(id: string) {
    await this.MovieRepository.delete({ id });
    return { delete: true };
  }
}



