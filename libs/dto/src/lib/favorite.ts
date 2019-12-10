import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user';
import { Movie } from './movie';

@ObjectType()
export class Favorites {
  @Field(() => ID)
  readonly id: string;
  @Field(() => User)
  readonly user: User;
  @Field(() => Movie)
  readonly movie: Movie;
}
