import { Module } from '@nestjs/common';
import { MediaModule } from './movie/movie.module';

import { AppController } from './app.controller';
import { MediaController } from './movie/movie.controller';
import { AppService } from './app.service';

@Module({
  imports: [MediaModule],
  controllers: [AppController, MediaController],
  providers: [AppService],
})
export class AppModule {}
