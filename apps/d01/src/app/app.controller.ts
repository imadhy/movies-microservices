import { Controller, Get, Injectable, Inject, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService, private readonly appService: AppService) {}

  @Get('users/all')
  getData() {
    return this.userService.findAll();
  }

  @Post('users')
  postUser(@Req() request: Request, res){
    return this.appService.postUser(request, res);
  }

}
