import { InputType, Field } from 'type-graphql';

@InputType()
export class FavoriteInput {
  @Field()
  readonly id: string;
  @Field()
  readonly id_user: string;
  @Field()
  readonly id_media: string;
}
