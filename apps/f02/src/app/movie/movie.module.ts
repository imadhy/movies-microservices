import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { DateScalar } from '../../assets/scalars/date.scalar';

@Module({
  providers: [MovieService, MovieResolver, DateScalar]
})
export class MovieModule {}
