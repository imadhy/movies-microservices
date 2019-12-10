import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteResolver } from './favorite.resolver';

@Module({
  providers: [FavoriteService, FavoriteResolver],
  exports: [FavoriteService]
})
export class UserModule {}
