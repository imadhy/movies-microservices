import { Controller, Get } from '@nestjs/common';
import { UserService } from '../Services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users/all')
  getData() {
    return this.userService.findAll();
  }
}
