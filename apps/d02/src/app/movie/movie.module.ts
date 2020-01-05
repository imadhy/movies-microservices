import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { MovieEntity } from '@movie-ms/dto';
import { MovieController } from './movie.controller';
import { CategoryEntity } from 'libs/dto/src/lib/d02/category.entity';
import { PersonEntity } from 'libs/dto/src/lib/d02/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity, CategoryEntity, PersonEntity])
  ],
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService]
})
export class MovieModule {}
