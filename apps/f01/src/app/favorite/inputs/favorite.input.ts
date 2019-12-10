import { InputType, Field } from 'type-graphql';

@InputType()
export class FavoriteInput {
  @Field()
  readonly id: string;
}
