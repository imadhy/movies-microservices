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
    country?: string;
    @Field()
    created_at?: Date;
    @Field()
    updated_at?: Date;
    @Field()
    password?: string;
    @Field()
    birthdate?: Date;
    @Field()
    gender?: string;
    @Field()
    auth?: string;
    @Field()
    ip_address?: string;
    @Field()
    last_connexion?: Date;
    @Field()
    admin?: boolean;
    @Field()
    os?: string;
    @Field()
    os_version?: string;
}