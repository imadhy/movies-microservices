import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { PersonModule } from './person/person.module';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MovieModule,
    PersonModule,
    CategoryModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: './apps/f02/src/app/interfaces.ts'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
