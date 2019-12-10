import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { MovieEntity } from '../../../../libs/dto/src/lib/d02/movie.entity';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService]
})
export class AppModule {}
