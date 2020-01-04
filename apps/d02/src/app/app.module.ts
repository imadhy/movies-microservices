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
import { CategoryController } from './category/category.controller';
import { PersonController } from './person/person.controller';
import { CategoryModule } from './category/category.module';
import { PersonModule } from './person/person.module';

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
    MovieModule,
    CategoryModule,
    PersonModule
  ],
  controllers: [
    AppController,
    MovieController,
    CategoryController,
    PersonController
  ],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
