import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from '../../../../libs/dto/src/lib/d01/user.entity';
import { Comment } from '../../../../libs/dto/src/lib/d01/comment.entity';
import { Favorite } from '../../../../libs/dto/src/lib/d01/favorite.entity';
import { UserModule } from './Services/user.module';
import { CommentModule } from './Services/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      entities: [User, Comment, Favorite],
      synchronize: true
    }),
    UserModule,
    CommentModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
