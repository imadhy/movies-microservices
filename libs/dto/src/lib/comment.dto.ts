import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class CommentDTO {
    @Field(() => ID)
    readonly id: string;
    @Field()
    readonly prop1: string;
    @Field()
    readonly prop2: string;
}