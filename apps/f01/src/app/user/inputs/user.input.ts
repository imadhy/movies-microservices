import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  readonly id: string;
  @Field()
  readonly first_name: string;
  @Field()
  readonly last_name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly country: string;
  @Field()
  readonly created_at: string;
  @Field()
  readonly birthday: string;
  @Field()
  readonly gender: string;
  @Field()
  readonly admin: boolean;
}
