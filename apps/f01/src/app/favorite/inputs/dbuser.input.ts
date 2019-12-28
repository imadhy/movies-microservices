import { InputType, Field } from 'type-graphql';

@InputType()
export class DbUserInput {
  @Field()
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
