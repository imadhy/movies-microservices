import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class FavoritesAlt {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly user_id: string;
  @Field()
  readonly movie_id: string;
}
