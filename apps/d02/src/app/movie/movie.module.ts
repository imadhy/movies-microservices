import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { MovieEntity } from '@movie-ms/dto';
import { MovieController } from './movie.controller';
import { CategoryEntity } from 'libs/dto/src/lib/d02/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, CategoryEntity])],
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService]
})
export class MovieModule {}
