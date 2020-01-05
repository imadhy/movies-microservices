import {
  Mutation,
  Query,
  Resolver,
  Args,
  Parent,
  ResolveProperty
} from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from '../interfaces';
import { CategoryService } from '../category/category.service';
import { PersonService } from '../person/person.service';

@Resolver('Movie')
export class MovieResolver {
  constructor(
    private readonly movieService: MovieService,
    private readonly personService: PersonService,
    private readonly categoryService: CategoryService
  ) {}

  @Query()
  async movie(@Args('id') id: string) {
    return await this.movieService.getMovieById(id);
  }

  @Query()
  async movies() {
    return await this.movieService.getAllMovies();
  }

  @ResolveProperty()
  async categories(@Parent() movie) {
    return await movie.categories.map(async category => {
      return await this.categoryService.getCategoryById(category.id);
    });
  }

  @ResolveProperty()
  async actors(@Parent() movie) {
    return await movie.actors.map(async actors => {
      return await this.personService.getPersonById(actors.id);
    });
  }

  @ResolveProperty()
  async directors(@Parent() movie) {
    return await movie.directors.map(async directors => {
      return await this.personService.getPersonById(directors.id);
    });
  }

  @ResolveProperty()
  async producers(@Parent() movie) {
    return await movie.producers.map(async producers => {
      return await this.personService.getPersonById(producers.id);
    });
  }

  @Mutation()
  async createMovie(@Args('movie') movie) {
    movie.categories = { ids: movie.categories };
    movie.actors = { ids: movie.actors };
    movie.directors = { ids: movie.directors };
    movie.producers = { ids: movie.producers };
    movie.release = new Date(movie.release);
    return await this.movieService.createMovie(movie);
  }

  @Mutation()
  async updateMovie(@Args('id') id: string, @Args('movie') movie) {
    movie.categories = { ids: movie.categories };
    movie.actors = { ids: movie.actors };
    movie.directors = { ids: movie.directors };
    movie.producers = { ids: movie.producers };
    return await this.movieService.updateMovie(id, movie);
  }

  @Mutation()
  async deleteMovie(@Args('id') id) {
    return await this.movieService.deleteMovie(id);
  }
}
