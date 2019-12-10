import { Module } from '@nestjs/common';
import { MediaModule } from './movie/movie.module';

import { AppController } from './app.controller';
import { MovieController } from './movie/movie.controller';
import { AppService } from './app.service';

@Module({
  imports: [MediaModule],
  controllers: [AppController, MovieController],
  providers: [AppService],
})
export class AppModule {}
