import { Controller, Get, Delete, Param } from '@nestjs/common';
import { UserService } from '../Services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/all')
  getAll() {
    return this.userService.findAll();
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id) {
    return await this.userService.deleteByID(id);
  }
}
