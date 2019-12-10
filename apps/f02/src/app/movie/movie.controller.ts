import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Param
} from '@nestjs/common';
import { MovieService } from './movie.service';

export type Media = any;

@Controller('media')
export class MediaController {
  constructor(private readonly movieservice: MovieService) {}

  // Get All Medias
  @Get('')
  getMedias() {
    return this.movieservice.getAllMovies();
  }

  // Get Media By Id
  @Get(':id')
  getMediaById(@Param('id') id: string) {
    return this.movieservice.getMovieById(id);
  }

  // Get Media category
  @Get(':id/category')
  getMediaCategory(@Param('id') id: string) {
    return this.movieservice.getMovieCategory(id);
  }
}
