import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class PersonDTO {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly firstname: string;
  @Field()
  readonly lastname: string;
  @Field()
  readonly birthdate: Date;
}