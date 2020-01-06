import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { PersonModule } from './person/person.module';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';

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
  ]
})
export class AppModule {}
