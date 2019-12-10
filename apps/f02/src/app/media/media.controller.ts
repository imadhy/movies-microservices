import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  Param
} from '@nestjs/common';
import { MediaService } from './media.service';

export type Media = any;

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  // Get All Medias
  @Get('')
  getMedias() {
    return this.mediaService.getAllMovies();
  }

  // Get Media By Id
  @Get(':id')
  getMediaById(@Param('id') id: string) {
    return this.mediaService.getMovieById(id);
  }

  // Get Media category
  @Get(':id/category')
  getMediaCategory(@Param('id') id: string) {
    return this.mediaService.getMovieCategory(id);
  }
}
