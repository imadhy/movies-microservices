import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class FavoriteInput {
  @Field(() => ID)
  readonly user_id: string;
  @Field(() => ID)
  readonly movie_id: string;
}
