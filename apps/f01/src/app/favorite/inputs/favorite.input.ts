import { InputType, Field } from 'type-graphql';
import { User } from '@movie-ms/dto';
import { Movie } from '@movie-ms/dto';

@InputType()
export class FavoriteInput {
  @Field()
  readonly user: User;
  @Field()
  readonly movie: Movie;
}
