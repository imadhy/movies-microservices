import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}
  
  getData(): { message: string } {
    this.callApi("https://jsonplaceholder.typicode.com/todos/1");
    return { message: 'Welcome to f03!' };
  }

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

  callApi(url : string): String{
    var data: String = null;
    this.httpService.get(url).subscribe(res => {
      data = res.data;
    });
    return data;
  }
}