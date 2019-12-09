import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql'
    })
  ],
})
export class AppModule {}
