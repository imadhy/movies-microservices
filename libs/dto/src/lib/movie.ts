import { ObjectType, Field, ID } from 'type-graphql';
import { Person } from './person';
import { Category } from './category';

@ObjectType()
export class Movie {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field(() => Date, { nullable: true })
  readonly release?: Date;
  @Field({ nullable: true })
  readonly duration?: number;
  @Field({ nullable: true })
  readonly synopsis?: string;
  @Field({ nullable: true })
  readonly category?: Category;
  @Field({ nullable: true })
  readonly producer?: Person;
  @Field({ nullable: true })
  readonly director?: Person;
  @Field(() => [Person], { nullable: true })
  readonly actors?: Person[];
}
