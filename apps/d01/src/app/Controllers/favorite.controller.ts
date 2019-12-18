import { Controller, Get, Delete, Param, Put, Body } from '@nestjs/common';
import { FavoriteService } from '../Services/favorite.service';
import { Favorite } from '../../../../../libs/dto/src/lib/d01/favorite.entity';

@Controller('favorite')
export class FavoriteController {
  commentService: any;
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get('get/:id')
  getOne(@Param('id') id) {
    return this.favoriteService.findByID(id);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id) {
    return await this.favoriteService.deleteById(id);
  }
}
