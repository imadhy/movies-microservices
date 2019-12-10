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
  readonly admin: boolean;
  @Field({ nullable: true })
  readonly country?: string;
  @Field(() => Date, { nullable: true })
  readonly birthday?: Date;
  @Field({ nullable: true })
  readonly gender?: string;
}
