import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';

import { AppController } from './app.controller';
import { MovieController } from './movie/movie.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [MovieModule, CommentModule],
  controllers: [AppController, MovieController],
  providers: [AppService]
})
export class AppModule {}
