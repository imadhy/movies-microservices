import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MediaController } from './movie.controller';

@Module({
  controllers: [MediaController],
  providers: [MovieService],
  exports: [MovieService]
})
export class MediaModule {}
