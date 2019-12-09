import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from '@movie-ms/dto';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  findAllUser() {
    return this.UserService.findAll();
  }

  @Post()
  createUser(@Body() data: UserDTO) {
    return this.UserService.create(data);
  }

  @Get(':id')
  findOneByIdUser(@Param('id') id: string) {
    return this.UserService.findOneById(id);
  }

  @Get('email/:email')
  findOneByEmailUser(@Param('email') email: string) {
    return this.UserService.findOneByEmail(email);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
    return this.UserService.update(id, data);
  }

  @Delete(':id')
  destroyUser(@Param('id') id: string) {
    return this.UserService.destroy(id);
  }
}
