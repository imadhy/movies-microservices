import { InputType, Field } from 'type-graphql';

@InputType()
export class AuthInput {
  @Field()
  readonly id: string;
  @Field()
  readonly firstname: string;
  @Field()
  readonly lastname: string;
  @Field()
  readonly email: string;
  @Field()
  readonly token: string;
}
