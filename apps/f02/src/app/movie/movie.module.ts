import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { DateScalar } from '../../assets/scalars/date.scalar';
import { CategoryModule } from '../category/category.module';
import { PersonModule } from '../person/person.module';

@Module({
  imports: [CategoryModule, PersonModule],
  providers: [MovieService, MovieResolver, DateScalar],
  exports: [MovieService]
})
export class MovieModule {}
