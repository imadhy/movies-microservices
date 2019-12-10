import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class FavoriteDTO {
    @Field(() => ID)
    readonly id: string;
}
