import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'libs/dto/src/lib/d02/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRep: Repository<MovieEntity>
  ) {}

  async showAll() {
    return await this.movieRep.find();
  }

  async create(data: MovieEntity) {
    const order = await this.movieRep.create(data);
    await this.movieRep.save(order);
    return order;
  }

  async show(id: string) {
    return await this.movieRep.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<MovieEntity>) {
    return await this.movieRep.update({ id }, data);
  }

  async destroy(id: string) {
    await this.movieRep.delete({ id });
    return { delete: true };
  }

  async sortMoviesByRelease() {
    return this.movieRep.query('SELECT * FROM movie ORDER BY release');
  }

  async sortMoviesByUpdatedAt() {
    return this.movieRep.query('SELECT * FROM movie ORDER BY updatedAt');
  }

  async sortMoviesByCreatedAt() {
    return this.movieRep.query('SELECT * FROM movie ORDER BY createdAt');
  }

  async getMoviesByCategroy(name) {
    return this.movieRep.query(
      'SELECT * FROM movie, category WHERE movie.categoryId=category.id AND category.title like "name"'
    );
  }

  async getMoviesByDirector(name) {
    return this.movieRep.query(
      'SELECT * FROM movie, person WHERE movie.director=person.id AND person.name like "name"'
    );
  }

  async getMoviesByActor(name) {
    return this.movieRep.query(
      'SELECT * FROM movie,acting_movie, person WHERE acting_movie.person_id=person.id AND acting_movie.movie_id=movie.id AND name.person like "name"'
    );
  }

  async getMoviesByProducer(name) {
    return this.movieRep.query(
      'SELECT * FROM movie, person WHERE movie.producer=person.id AND person.name like "name"'
    );
  }
}
