import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { UserService } from '../Services/user.service';
import { User } from '../../../../../libs/dto/src/lib/d01/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/all')
  getAll() {
    return this.userService.findAll();
  }

  @Get('get/:id')
  getOne(@Param('id') id) {
    return this.userService.findByID(id);
  }

  @Post('post')
  post(@Body() user: User) {
    return this.userService.insert(user);
  }

  @Put('put/:id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.userService.update(user, id);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id) {
    return await this.userService.deleteByID(id);
  }
}
