import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class MediaDTO {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly info: string;
  @Field()
  readonly created_at: Date;
  @Field()
  readonly updated_at: Date;
  @Field()
  readonly type: string;
  @Field()
  readonly length: number;
  @Field()
  readonly categorie: string;
}