import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user';
import { Movie } from './movie';

@ObjectType()
export class Comment {
  @Field(() => ID)
  readonly id: string;
  @Field(() => User)
  readonly user: User;
  @Field(() => Movie)
  readonly movie: Movie;
  @Field(() => Date)
  readonly created_at: Date;
  @Field()
  readonly comment: string;
  @Field(() => Date, { nullable: true })
  readonly updated_at?: Date;
  @Field({ nullable: true })
  readonly rating?: number;
}
