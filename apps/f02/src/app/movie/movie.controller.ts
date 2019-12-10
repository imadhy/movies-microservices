import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Param
} from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieservice: MovieService) {}

  // Get All Medias
  @Get('')
  getMovies() {
    return this.movieservice.getAllMovies();
  }

  // Get Media By Id
  @Get(':id')
  getMovieById(@Param('id') id: string) {
    return this.movieservice.getMovieById(id);
  }

  // Get Media category
  @Get(':id/category')
  getMovieCategory(@Param('id') id: string) {
    return this.movieservice.getMovieCategory(id);
  }
}
