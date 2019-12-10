import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users/alls')
  getData() {
    return this.userService.findAll();
  }
}
