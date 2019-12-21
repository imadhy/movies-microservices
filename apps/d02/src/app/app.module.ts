import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { Connection } from 'typeorm';
import { PersonEntity } from 'libs/dto/src/lib/d02/person.entity';
import { CategoryEntity } from 'libs/dto/src/lib/d02/category.entity';
import { MovieEntity } from 'libs/dto/src/lib/d02/movie.entity';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nasnantesp.myqnapcloud.com',
      port: 3390,
      username: 'ynov',
      password: 'ynov',
      database: 'bdd_media_nodejs_ynov',
      entities: [MovieEntity, PersonEntity, CategoryEntity],
      synchronize: true
    }),
    MovieModule
  ],
  controllers: [AppController, MovieController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
