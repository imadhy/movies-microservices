import {
  Mutation,
  Query,
  Resolver,
  Args,
  ResolveProperty
} from '@nestjs/graphql';
import { MovieService } from './movie.service';

@Resolver('Movie')
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query()
  async movie(@Args('id') id: string) {
    return await this.movieService.getMovieById(id);
  }

  @Query()
  async movies() {
    return await this.movieService.getAllMovies();
  }
}
