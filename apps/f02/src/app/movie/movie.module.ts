import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService]
})
export class MediaModule {}
