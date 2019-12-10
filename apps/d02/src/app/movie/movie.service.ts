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

  async sortMoviesByRelease() {
    return this.MovieRepository.query('SELECT * FROM movie ORDER BY release');
  }

  async sortMoviesByUpdatedAt() {
    return this.MovieRepository.query('SELECT * FROM movie ORDER BY updatedAt');
  }

  async sortMoviesByCreatedAt() {
    return this.MovieRepository.query('SELECT * FROM movie ORDER BY createdAt');
  }

  async getMoviesByCategroy(name) {
    return this.MovieRepository.query(
      'SELECT * FROM movie, category WHERE movie.categoryId=category.id AND category.title like "name"'
    );
  }

  async getMoviesByDirector(name) {
    return this.MovieRepository.query(
      'SELECT * FROM movie, person WHERE movie.director=person.id AND person.name like "name"'
    );
  }

  async getMoviesByActor(name) {
    return this.MovieRepository.query(
      'SELECT * FROM movie,acting_movie, person WHERE acting_movie.person_id=person.id AND acting_movie.movie_id=movie.id AND name.person like "name"'
    );
  }

  async getMoviesByProducer(name) {
    return this.MovieRepository.query(
      'SELECT * FROM movie, person WHERE movie.producer=person.id AND person.name like "name"'
    );
  }
}
