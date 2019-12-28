import { Injectable } from '@nestjs/common';
import { Favorites } from '@movie-ms/dto';
import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FavoriteService {
  private readonly favorites: Favorites[];

  constructor() {
    this.favorites = [
      {
        id: '0',
        user: {
          id: 'id',
          first_name: 'samy',
          last_name: 'vera',
          admin: true
        },
        movie: {
          id: '0',
          title: '1984'
        }
      }
    ];
  }

  async addFavorite(favorite: FavoriteInput): Promise<Favorites> {
    const fav: Favorites = {
      id: uuid(),
      user: favorite.user,
      movie: favorite.movie
    }
    this.favorites.push(fav);
    return fav;
  }

  async getFavoriteByUserId(id: string): Promise<Favorites[]> {
    return this.favorites.filter(favorite => favorite.user.id === id);
  }

  async deleteFavorite(favorite: FavoriteInput): Promise<boolean> {
    const favIndex = this.favorites.findIndex(fav => fav.user.id === favorite.user.id && fav.movie.id === favorite.movie.id);
    if (favIndex !== -1) {
      this.favorites.splice(favIndex, 1);
      return true;
    }
    return false;
  }
}
