import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserMediaDTO {
    @Field(() => ID)
    readonly user_id: string;
    @Field(() => ID)
    readonly media_id: string;
    @Field()
    readonly created_at: Date;
    @Field()
    readonly updated_at: Date;
    @Field()
    readonly rating: number;
    @Field()
    readonly comment: string;
}