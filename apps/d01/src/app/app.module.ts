import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user.entity';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestproject',
      entities: [User],
      synchronize: true,
    }),
    UserModule
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
