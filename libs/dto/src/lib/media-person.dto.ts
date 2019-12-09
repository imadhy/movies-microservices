import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class MediaPersonDTO {
    @Field(() => ID)
    readonly id_media: string;
    @Field(() => ID)
    readonly id_person: string;
    @Field()
    readonly role: string;
}