import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Comment {
  @Field(() => ID)
  readonly id: string;
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
