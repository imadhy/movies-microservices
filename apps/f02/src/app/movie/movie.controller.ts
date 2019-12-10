import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Param
} from '@nestjs/common';
import { MovieService } from './movie.service';

export type Movie = any;

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  // Get All Movies
  @Get('')
  getMovies() {
    return this.movieService.getAllMovies();
  }

  // Get Movie By Id
  @Get(':id')
  getMovieById(@Param('id') id: string) {
    return this.movieService.getMovieById(id);
  }

  // Get Movie category
  @Get(':id/category')
  getMovieCategory(@Param('id') id: string) {
    return this.movieService.getMovieCategory(id);
  }
}
