import { Injectable, HttpService } from '@nestjs/common';
import { FavoritesAlt, Message } from '@movie-ms/dto';

import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';

import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

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

  async addFavorite(favorite: FavoriteInput): Promise<Message> {
    const fav: FavoritesAlt = {
      id: uuid(),
      user_id: favorite.user_id,
      movie_id: favorite.movie_id
    };

    this.favorites.push(fav);

    return {
      message: 'Favorite has been successfully added',
      type: 'Info',
      status: 200
    };
  }

  async getFavoriteByUserId(user_id: string): Promise<FavoritesAlt[]> {
    return this.favorites.filter(favorite => favorite.user_id === user_id);
  }

  async deleteFavorite(favorite: FavoriteInput): Promise<Message> {
    const favIndex = this.favorites.findIndex(fav => {
      return (
        fav.user_id === favorite.user_id &&
        fav.movie_id === favorite.movie_id
      );
    });

    let result = {
      message: 'No such favorite has been found',
      type: 'Error',
      status: 400
    };

    if (favIndex !== -1) {
      this.favorites.splice(favIndex, 1);

      result.message = 'Favorite has been successfully deleted';
      result.type = 'Info';
      result.status = 200;
    }

    return result;
  }
}
