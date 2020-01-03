import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CommentInput {
@Field(() => ID)
  readonly userId: string;
  @Field(() => ID)
readonly movieId: string;
@Field()
  readonly comment: string;
// @Field()
  // readonly created_at?: Date;
  // @Field()
// readonly updated_at?: Date;
// @Field()
  // readonly rating?: number;
}
