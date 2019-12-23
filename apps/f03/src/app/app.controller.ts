import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('getNbFavByMedia')
  getNbFavByMedia(): String {
    return this.appService.getNbFavByMedia();
  }

  @Get('getCommentByMedia')
  getCommentByMedia(): String {
    return this.appService.getCommentByMedia();
  }

  @Get('getTopDixRateMediaByUser')
  getTopDixRateMediaByUser(): String {
    return this.appService.getTopDixRateMediaByUser();
  }

  @Get('getTopDixAuthorByFavMedia')
  getTopDixAuthorByFavMedia(): String {
    return this.appService.getTopDixAuthorByFavMedia();
  }
}
