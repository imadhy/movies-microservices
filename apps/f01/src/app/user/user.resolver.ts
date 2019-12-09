import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { MessageDTO, UserDTO } from '@movie-ms/dto';
import { SignupInput } from './inputs/signup.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  
  @Mutation(() => MessageDTO) // Create User / Signup
  async signup(@Args('input') input: SignupInput) {
    return this.userService.create(input);
  }

  @Query(() => [UserDTO]) // Find all user in database
  @UseGuards(GqlAuthGuard)
  async users() {
    return this.userService.findAll();
  }

  @Query(() => UserDTO) // Find one user by id
  @UseGuards(GqlAuthGuard)
  async findUser(@Args('id') id: string) {
    return await this.userService.findOneById(id);
  }

  // @Mutation(() => UserDTO)
  // async updateUser(@Args('id') id: string, body: UpdateUserDto) {
  //     return this.userService.update(id, body);
  // }

  @Query(() => MessageDTO) // Delete user by id
  @UseGuards(GqlAuthGuard)
  async deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
