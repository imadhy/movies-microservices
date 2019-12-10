import { InputType, Field } from 'type-graphql';
import { Movie, User } from '@movie-ms/dto';

@InputType()
export class CommentInput {
    @Field()
    readonly user: User;
    @Field()
    readonly movie: Movie;
    @Field()
    readonly created_at: Date;
    @Field()
    readonly comment: string;
    @Field()
    readonly updated_at?: Date;
    @Field()
    readonly rating?: number;
}
