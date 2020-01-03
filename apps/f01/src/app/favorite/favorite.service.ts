import { Injectable } from '@nestjs/common';
import { FavoritesAlt } from '@movie-ms/dto';
import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FavoriteService {
  private readonly favorites: FavoritesAlt[];

  constructor() {
    this.favorites = [
      {
        id: '0',
        user_id: 'shaggy',
        movie_id: '1984'
      }
    ];
  }

  async addFavorite(favorite: FavoriteInput): Promise<FavoritesAlt> {
    const fav: FavoritesAlt = {
      id: uuid(),
      user_id: favorite.user_id,
      movie_id: favorite.movie_id
    };

    this.favorites.push(fav);
    return fav;
  }

  async getFavoriteByUserId(user_id: string): Promise<FavoritesAlt[]> {
    return this.favorites.filter(favorite => favorite.user_id === user_id);
  }

  async deleteFavorite(favorite: FavoriteInput): Promise<boolean> {
    const favIndex = this.favorites.findIndex(
      fav =>
        fav.user_id === favorite.user_id && fav.movie_id === favorite.movie_id
    );
    if (favIndex !== -1) {
      this.favorites.splice(favIndex, 1);
      return true;
    }
    return false;
  }
}
