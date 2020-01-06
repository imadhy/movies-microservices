import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteService } from './favorite.service';
import { Favorite } from '../../../../../libs/dto/src/lib/d01/favorite.entity';
import { FavoriteController } from '../Controllers/favorite.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
  providers: [FavoriteService],
  controllers: [FavoriteController]
})
export class FavoriteModule {}
