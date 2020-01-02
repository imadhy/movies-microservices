import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { UserModule } from './user/user.module';
import { FavoriteModule } from './favorite/favorite.module';


@Module({
  imports: [
    UserModule,
    FavoriteModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql'
    })
  ]
})
export class AppModule {}
