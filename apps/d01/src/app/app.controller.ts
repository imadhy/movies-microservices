import { Controller, Get, Injectable, Inject, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users/all')
  getAll() {
    return this.appService.getAll();
  }

  @Post('users')
  postUser(@Req() request: Request, res){
    return this.appService.postUser(request, res);
  }

}
