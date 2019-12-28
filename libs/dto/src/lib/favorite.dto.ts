import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class FavoriteDTO {
  @Field(() => ID)
  readonly id: string;
  @Field(() => ID)
  readonly id_user: string;
  @Field(() => ID)
  readonly id_media: string;
}
