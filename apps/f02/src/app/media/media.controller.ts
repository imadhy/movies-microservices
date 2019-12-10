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
    return this.mediaService.getAllMedias();
  }

  // Get Media By Id
  @Get(':id')
  getMediaById(@Param('id') id: string) {
    return this.mediaService.getMediaById(id);
  }

  // Get Media categroy
  @Get(':id/category')
  getMediaCategory(@Param('id') id: string) {
    return this.mediaService.getMediaCategory(id);
  }
}
