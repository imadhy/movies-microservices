import { InputType, Field } from 'type-graphql';
import { User } from '@movie-ms/dto';
import { Movie } from '@movie-ms/dto';

@InputType()
export class FavoriteInput {
  @Field(() => User)
  readonly user: User;
  @Field(() => Movie)
  readonly movie: Movie;
}
