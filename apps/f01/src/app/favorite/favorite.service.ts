/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, HttpService } from '@nestjs/common';
import { FavoritesAlt, Message } from '@movie-ms/dto';
import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FavoriteService {
  private readonly favorites: FavoritesAlt[];

  constructor(private readonly http: HttpService) {
    this.favorites = [];
  }

  /**
   * Make a request from a distant service
   * @param url API endpoint
   */
  request(url: string): string {
    let response: string = null;
    this.http.get(url).subscribe(res => response = res.data);
    return response;
  }

  /**
   * Insert a favorite
   * @param favorite A favorite object, defined by a user id and a movie id
   */
  async addFavorite(favorite: FavoriteInput): Promise<Message> {

    //D01 missing request : get favorite by userId and movieId
    // const response = JSON.parse(this.request('http://localhost:3003/api/favorite/???'));

    const favIndex = this.favorites.findIndex(fav => {
      return (
        fav.user_id === favorite.user_id && fav.movie_id === favorite.movie_id
      );
    });

    let message = 'Favorite already exists';
    let type = 'Error';
    let status = 400;

    if (favIndex === -1) {
      this.favorites.push({
        id: uuid(),
        user_id: favorite.user_id,
        movie_id: favorite.movie_id
      });

      // const response = JSON.parse(this.request('http://localhost:3003/api/favorite/post'));

      message = 'Favorite has been successfully added';
      type = 'Info';
      status = 200;
    }

    return {
      message: message,
      type: type,
      status: status
    };
  }

  /**
   * Get an user favorite list
   * @param user_id User id
   */
  async getFavoriteByUserId(user_id: string): Promise<FavoritesAlt[]> {

    //D01 missing request : get favorite by userId
    // const response = JSON.parse(this.request('http://localhost:3003/api/favorite/???'));

    return this.favorites.filter(favorite => favorite.user_id === user_id);
  }

  /**
   * Delete a favorite
   * @param favorite A favorite object, defined by a user id and a movie id
   */
  async deleteFavorite(favorite: FavoriteInput): Promise<Message> {

    //D01 missing request : delete favorite by userId and movieId
    // const response = JSON.parse(this.request('http://localhost:3003/api/favorite/???'));

    const favIndex = this.favorites.findIndex(fav => {
      return (
        fav.user_id === favorite.user_id && fav.movie_id === favorite.movie_id
      );
    });

    let message = 'No such favorite has been found';
    let type = 'Error';
    let status = 400;

    if (favIndex !== -1) {
      this.favorites.splice(favIndex, 1);

      message = 'Favorite has been successfully deleted';
      type = 'Info';
      status = 200;
    }

    return {
      message: message,
      type: type,
      status: status
    };
  }
}
