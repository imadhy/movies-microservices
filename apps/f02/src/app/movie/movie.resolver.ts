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
  async category(@Parent() movie) {
    const { id } = movie;
    return await this.categoryService.getCategoryById(id);
  }

  @ResolveProperty()
  async director(@Parent() movie) {
    const { id } = movie;
    return await this.personService.getPersonById(id);
  }

  @ResolveProperty()
  async producer(@Parent() movie) {
    const { id } = movie;
    return await this.personService.getPersonById(id);
  }
}
