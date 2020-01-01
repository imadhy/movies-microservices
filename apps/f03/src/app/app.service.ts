import { Injectable, HttpService } from '@nestjs/common';
import { FavByMedia } from '../model/FavByMedia';
import { FavByAuthor } from '../model/FavByAuthor';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getData(): { message: string } {
    this.callApi('https://jsonplaceholder.typicode.com/todos/1');
    return { message: 'Welcome to f03!' };
  }

  /**
   * Récupère le nombre de favoris d'un média
   */
  getNbFavByMedia(): String {
    var data = [
      { id_user: '1', id_media: '5' },
      { id_user: '2', id_media: '6' },
      { id_user: '3', id_media: '5' },
      { id_user: '4', id_media: '6' }
    ];

    var nbFavByFilm: FavByMedia[] = [];

    if (data != null) {
      data.forEach(elm => {
        let film_key: number = nbFavByFilm.findIndex(
          film => elm.id_media == film.id_media
        );
        if (film_key !== -1) {
          nbFavByFilm[film_key].nb_fav++;
        } else {
          nbFavByFilm.push({ id_media: elm.id_media, nb_fav: 1 });
        }
      });
    }

    return JSON.stringify(nbFavByFilm);
  }

  /**
   * Récupère le top 10 des films les mieux notés pour un utilisateur donné
   */
  getTopDixRateMediaByUser(): String {
    var data: { id_film: string; rate_film: string }[] = [
      { id_film: '5', rate_film: '5' },
      { id_film: '6', rate_film: '4' },
      { id_film: '7', rate_film: '5' },
      { id_film: '8', rate_film: '2' }
    ];

    let filmbyRate: { id_film: string; rate_film: string }[] = [];

    if (data !== null) {
      data.sort((obj1, obj2) => {
        if (obj1.rate_film > obj2.rate_film) {
          return 1;
        }

        if (obj1.rate_film < obj2.rate_film) {
          return -1;
        }

        return 0;
      });

      for (let i = 0; i < 10; i++) {
        filmbyRate[i] = data[i];
      }
    }

    return JSON.stringify(filmbyRate);
  }

  getCommentByMedia(): String {
    return '{methode : getCommentByMedia}';
  }

  /**
   * Récupère le top 10 des auteurs des films les plus mis en favoris
   */
  getTopDixAuthorByFavMedia(): String {
    var data: { id_user: string; id_media: string }[] = [
      { id_user: '1', id_media: '5' },
      { id_user: '2', id_media: '6' },
      { id_user: '3', id_media: '5' },
      { id_user: '4', id_media: '6' }
    ];

    let nbFavByFilm: FavByMedia[] = this.countElement(data);

    var authArray: FavByAuthor[] = [];

    if (nbFavByFilm !== null) {
      var authArrayTemp: FavByAuthor[] = [];

      nbFavByFilm.forEach(favElmt => {
        let auth = this.callApi('https://api/getAuth/' + favElmt.id_media);
        console.log('erreur ligne 66 auth est vide car ça call null part');
        // authArrayTemp.push({auth_id: auth["id"], nb_fav: favElmt.nb_fav});
      });
      authArrayTemp.sort((a, b) => a.nb_fav - b.nb_fav);

      for (let i = 0; i < 10; i++) {
        authArray[i] = authArrayTemp[i];
      }
    }

    // return '{methode : getTopDixAuthorByFavMedia}';
    return JSON.stringify(authArray);
  }

  /**
   * Retourne un tableau composé de l'id du media ainsi que son nombre total de favoris
   * @param data tableau composé de l'id de l'utilisateur et d'un de ses films favoris
   */
  countElement(data: { id_user: string; id_media: string }[]): FavByMedia[] {
    var countArray: FavByMedia[] = [];

    if (data != null) {
      data.forEach(dataElmt => {
        let count_key: number = countArray.findIndex(
          countElmt => dataElmt.id_media == countElmt.id_media
        );
        if (count_key !== -1) {
          countArray[count_key].nb_fav++;
        } else {
          countArray.push({ id_media: dataElmt.id_media, nb_fav: 1 });
        }
      });
    }
    return countArray;
  }

  /**
   * Appelle et retourne les données trouvées à cette adresse
   * @param url chaine de caractère correspondant à l'url
   */
  callApi(url: string): String {
    var data: String = null;
    this.httpService.get(url).subscribe(res => {
      data = res.data;
    });
    return data;
  }
}
