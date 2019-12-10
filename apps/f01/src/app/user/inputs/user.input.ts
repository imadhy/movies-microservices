import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  readonly first_name: string;
  @Field()
  readonly last_name: string;
  @Field()
  readonly country?: string;
  @Field()
  readonly birthday?: Date;
  @Field()
  readonly gender?: string;
}
