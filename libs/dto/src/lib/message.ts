import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Message {
  @Field()
  readonly message: string;
  @Field()
  readonly type: string;
  @Field(() => Int)
  readonly status: number;
}
