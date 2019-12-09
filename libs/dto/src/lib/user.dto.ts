import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserDTO {
    @Field(() => ID)
    readonly id: string;
    @Field()
    readonly firstname: string;
    @Field()
    readonly lastname: string;
    @Field()
    readonly email: string;
    @Field()
    readonly country: string;
    @Field()
    readonly created_at: Date;
    @Field()
    readonly updated_at: Date;
    @Field()
    readonly password: string;
    @Field()
    readonly birthdate: Date;
    @Field()
    readonly gender: string;
    @Field()
    readonly auth: string;
    @Field()
    readonly ip_address: string;
    @Field()
    readonly last_connexion: Date;
    @Field()
    readonly admin: boolean;
    @Field()
    readonly os: string;
    @Field()
    readonly os_version: string;
}