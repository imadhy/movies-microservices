import { Injectable } from '@nestjs/common';
import { FavoriteDTO } from '@movie-ms/dto';
import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FavoriteService {
  private readonly favorites: FavoriteDTO[];

  constructor() {
    this.favorites = [
      {
        id: '0',
        id_user: 'shaggy',
        id_media: 'eva'
      }
    ];
  }

  async addFavorite(favorite: FavoriteInput): Promise<FavoriteDTO> {
    var fav: FavoriteDTO = {
      id: uuid(),
      id_user: favorite.id_user,
      id_media: favorite.id_media
    }
    this.favorites.push(fav);
    return fav;
  }

  async getFavoriteByUserId(id_user: string): Promise<FavoriteDTO[]> {
    return this.favorites.filter(favorite => favorite.id_user === id_user);
  }

  async deleteFavorite(favorite: FavoriteInput): Promise<boolean> {
    var favIndex = this.favorites.findIndex(fav => fav.id_user === favorite.id_user && fav.id_media === favorite.id_media);
    if (favIndex !== -1) {
      this.favorites.splice(favIndex, 1);
      return true;
    }
    return false;
  }
}
