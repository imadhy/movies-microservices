import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to f03!' };
  }

  getNbFavByMedia(): String {
    return '{methode : getNbFavByMedia}';
  }

  getTopDixRateMediaByUser(): String {
    return '{methode : getTopDixRateMediaByUser}';
  }

  getCommentByMedia(): String {
    return '{methode : getCommentByMedia}';
  }
}
