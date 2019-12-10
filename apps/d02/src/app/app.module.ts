import { Module } from '@nestjs/common';





import { TypeOrmModule } from '@nestjs/typeorm';



import { AppController } from './app.controller';

import { AppService } from './app.service';



import { MovieController } from './movie/movie.controller';

import { MovieService } from './movie/movie.service';

import { MovieEntity } from './movie/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,

      username: 'root',
      password: 'nuggets',
      database: 'movies-microservices',

      entities: [MovieEntity],
      synchronize: true
    }),
    TypeOrmModule.forFeature([MovieEntity])
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService]
})
export class AppModule {}
