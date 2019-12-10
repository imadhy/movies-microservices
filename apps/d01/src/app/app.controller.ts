import { Controller, Get, Injectable, Inject } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users/all')
  getAll() {
    return this.appService.getAll();
  }
}
