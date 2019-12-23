import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}
  
  getData(): { message: string } {
    this.callApi("https://jsonplaceholder.typicode.com/todos/1");
    return { message: 'Welcome to f03!' };
  }

  /**
   * Récupère le nombre de favoris d'un média
   */
  getNbFavByMedia(): String {
    var data = [
      {id_user : "1", id_film : "5"},
      {id_user : "2", id_film : "6"},
      {id_user : "3", id_film : "5"},
      {id_user : "4", id_film : "6"}
    ];

    var nbFavByFilm: {id_film: string, nb_fav: number}[] = [];
    
    if (data != null) {
      data.forEach(elm => {
        let film_key: number = nbFavByFilm.findIndex(film => elm.id_film == film.id_film);
        if (film_key !== -1)
        {
          nbFavByFilm[film_key].nb_fav++;
        }
        else
        {
          nbFavByFilm.push({id_film : elm.id_film, nb_fav : 1});
        }
      });
    }

    return JSON.stringify(nbFavByFilm);
  }

  getTopDixRateMediaByUser(): String {
    return '{methode : getTopDixRateMediaByUser}';
  }

  getCommentByMedia(): String {
    return '{methode : getCommentByMedia}';
  }

  /**
   * Récupère le top 10 des auteurs des films les plus mis en favoris
   */
  getTopDixAuthorByFavMedia(): String {
    var data: {id_user : string, id_film : string}[] = [
      {id_user : "1", id_film : "5"},
      {id_user : "2", id_film : "6"},
      {id_user : "3", id_film : "5"},
      {id_user : "4", id_film : "6"}
    ];

    let nbFavByFilm: {id_film: string, nb_fav: number}[] = this.countElement(data);

    var authArray: {auth_id: string, nb_fav: number}[] = [];

    if (nbFavByFilm !== null) {
      var authArrayTemp: {auth_id: string, nb_fav: number}[] = [];

      nbFavByFilm.forEach(favElmt => {
        let auth = this.callApi("https://api/getAuth/"+favElmt.id_film);
        console.log("erreur ligne 66 auth est vide car ça call null part");
        // authArrayTemp.push({auth_id: auth["id"], nb_fav: favElmt.nb_fav});
      });
      authArrayTemp.sort((a,b) => a.nb_fav - b.nb_fav);

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
  countElement(data: {id_user : string, id_film : string}[]): {id_film: string, nb_fav: number}[]{

    var countArray: {id_film: string, nb_fav: number}[] = [];

    if (data != null) {
      data.forEach(dataElmt => {
        let count_key: number = countArray.findIndex(countElmt => dataElmt.id_film == countElmt.id_film);
        if (count_key !== -1)
        {
          countArray[count_key].nb_fav++;
        }
        else
        {
          countArray.push({id_film : dataElmt.id_film, nb_fav : 1});
        }
      });
    }
    return countArray;
  }

  /**
   * Appelle et retourne les données trouvées à cette adresse
   * @param url chaine de caractère correspondant à l'url
   */
  callApi(url : string): String{
    var data: String = null;
    this.httpService.get(url).subscribe(res => {
      data = res.data;
    });
    return data;
  }
}