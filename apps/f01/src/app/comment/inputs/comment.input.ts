import { InputType, Field } from 'type-graphql';

@InputType()
export class CommentInput {
    @Field()
    readonly prop1: string;
    @Field()
    readonly prop2: string;
}
