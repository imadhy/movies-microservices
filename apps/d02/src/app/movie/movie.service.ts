import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'libs/dto/src/lib/d02/movie.entity';
import { CategoryEntity } from 'libs/dto/src/lib/d02/category.entity';
import { PersonEntity } from 'libs/dto/src/lib/d02/person.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRep: Repository<MovieEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRep: Repository<CategoryEntity>,
    @InjectRepository(PersonEntity)
    private readonly personRep: Repository<PersonEntity>
  ) {}

  async showAll() {
    return await this.movieRep.find({
      relations: ['categories', 'actors', 'producers', 'directors']
    });
  }

  async create(
    data: MovieEntity,
    categories: String[],
    actors: String[],
    producers: String[],
    directors: String[]
  ) {
    const order = await this.movieRep.create(data);
    if (categories != null) {
      let cat = await this.categoryRep.findByIds(categories);
      order.categories = cat;
    }
    if (actors != null) {
      let act = await this.personRep.findByIds(actors);
      order.actors = act;
    }
    if (producers != null) {
      let prod = await this.personRep.findByIds(producers);
      order.producers = prod;
    }
    if (directors != null) {
      let dir = await this.personRep.findByIds(directors);
      order.directors = dir;
    }

    await this.movieRep.save(order);
    return order;
  }

  async show(id: string) {
    return await this.movieRep.findOne({
      where: { id },
      relations: ['categories', 'actors', 'producers', 'directors']
    });
  }
  async update(
    id: string,
    data: Partial<MovieEntity>,
    categories: String[],
    actors: String[],
    producers: String[],
    directors: String[]
  ) {
    await this.setRelations(id, categories, actors, producers, directors);
    const movie = await this.movieRep.findOne({
      where: { id },
      relations: ['categories', 'actors', 'producers', 'directors']
    });
    return this.movieRep.save({
      ...movie,
      ...data
    });
  }
  async setRelations(
    id: string,
    categories: String[],
    actors: String[],
    producers: String[],
    directors: String[]
  ) {
    let movie = await this.movieRep.findOne(id);
    if (categories != null) {
      let cat = await this.categoryRep.findByIds(categories);
      movie.categories = cat;
    }
    if (actors != null) {
      let act = await this.personRep.findByIds(actors);
      movie.actors = act;
    }
    if (producers != null) {
      let prod = await this.personRep.findByIds(producers);
      movie.producers = prod;
    }
    if (directors != null) {
      let dir = await this.personRep.findByIds(directors);
      movie.directors = dir;
    }
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
