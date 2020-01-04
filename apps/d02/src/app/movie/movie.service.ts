import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'libs/dto/src/lib/d02/movie.entity';
import { CategoryEntity } from 'libs/dto/src/lib/d02/category.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRep: Repository<MovieEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRep: Repository<CategoryEntity>
  ) {}

  async showAll() {
    return await this.movieRep.find({ relations: ['categories'] });
  }

  async create(data: MovieEntity, categories: String[]) {
    const order = await this.movieRep.create(data);
    let cat = await this.categoryRep.findByIds(categories);
    order.categories = cat;
    await this.movieRep.save(order);
    return order;
  }

  async show(id: string) {
    return await this.movieRep.findOne({
      where: { id },
      relations: ['categories']
    });
  }
  async update(id: string, data: Partial<MovieEntity>, categories: String[]) {
    this.setCategories(categories, id);
    return await this.movieRep.update({ id }, data);
  }
  async setCategories(categories: String[], id: string) {
    let cat = await this.categoryRep.findByIds(categories);
    let movie = await this.movieRep.findOne(id);
    movie.categories = cat;
    await this.movieRep.save(movie);
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
