import { ObjectType, Field, ID } from 'type-graphql';
import { Movie } from './movie';

@ObjectType()
export class Person {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly firstname: string;
  @Field()
  readonly lastname: string;
  @Field(() => Date, { nullable: true })
  readonly birthday?: Date;
  @Field(() => [Movie], { nullable: true })
  readonly movies?: Movie[];
}
