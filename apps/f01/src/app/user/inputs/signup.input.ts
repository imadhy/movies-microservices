import { InputType, Field } from 'type-graphql';

@InputType()
export class SignupInput {
  @Field()
  readonly firstname: string;
  @Field()
  readonly lastname: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
