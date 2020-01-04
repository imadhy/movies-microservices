import { Injectable, HttpService } from '@nestjs/common';
import { FavoritesAlt, Message } from '@movie-ms/dto';
import { FavoriteInput } from './inputs/favorite.input';
import { v4 as uuid } from 'uuid';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class FavoriteService {
  private readonly favorites: FavoritesAlt[];

  constructor(private readonly http: HttpService) {
    this.favorites = [];
  }

  async addFavorite(favorite: FavoriteInput): Promise<Message> {

    //D01 missing request : get favorite by userId and movieId

    const favIndex = this.favorites.findIndex(fav => {
      return (
        fav.user_id === favorite.user_id && fav.movie_id === favorite.movie_id
      );
    });

    let result = {
      message: 'Favorite already exists',
      type: 'Error',
      status: 400
    };

    if (favIndex === -1) {
      this.favorites.push({
        id: uuid(),
        user_id: favorite.user_id,
        movie_id: favorite.movie_id
      });

      // LIVE ADD FAVORITE
      // const request = 'http://localhost:3003/api/favorite/post';
      // this.http.post(request, favorite).toPromise().then(res => {
      //   return res.data;
      // }).catch(err => {
      //   return err;
      // });

      result.message = 'Favorite has been successfully added';
      result.type = 'Info';
      result.status = 200;
    }

    return result;
  }

  async getFavoriteByUserId(user_id: string): Promise<FavoritesAlt[]> {

    //D01 missing request : get favorite by userId

    return this.favorites.filter(favorite => favorite.user_id === user_id);
  }

  async deleteFavorite(favorite: FavoriteInput): Promise<Message> {

    //D01 missing request : delete favorite by userId and movieId

    const favIndex = this.favorites.findIndex(fav => {
      return (
        fav.user_id === favorite.user_id && fav.movie_id === favorite.movie_id
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
