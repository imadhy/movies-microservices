import { Controller, Get, Delete, Param } from '@nestjs/common';
import { UserService } from '../Services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/get/all')
  getData() {
    return this.userService.findAll();
  }

  @Delete('user/delete/:id')
  async findOne(@Param('id') id) {
    await this.userService.deleteByID(id);
    return `User ${id} was successfully deleted`;
  }
}
