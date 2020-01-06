import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly first_name: string;
  @Field()
  readonly last_name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly created_at: string;
  @Field()
  readonly admin: boolean;
  @Field({ nullable: true })
  readonly country?: string;
  @Field(() => Date, { nullable: true })
  readonly birthday?: string;
  @Field({ nullable: true })
  readonly gender?: string;
}
