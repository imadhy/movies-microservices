import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { UserService } from '../Services/user.service';
import { User } from '../../../../../libs/dto/src/lib/d01/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/all')
  getAll() {
    return this.userService.findAll();
  }

  @Post()
  post(@Body() user: User) {
    return this.userService.insert(user);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id) {
    return await this.userService.deleteByID(id);
  }
}
