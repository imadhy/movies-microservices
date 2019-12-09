import { InputType, Field } from 'type-graphql';

@InputType()
export class SigninInput {
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
