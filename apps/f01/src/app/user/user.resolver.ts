import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { MessageDTO, UserDTO } from '@movie-ms/dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  
  @Mutation(() => MessageDTO) // Create User / Signup
  async signup(@Args('input') input: UserDTO) {
    return this.userService.create(input);
  }

  @Query(() => [UserDTO]) // Find all user in database
  async users() {
    return this.userService.findAll();
  }

  @Query(() => UserDTO) // Find one user by id
  async findUser(@Args('id') id: string) {
    return await this.userService.findOneById(id);
  }

  // @Mutation(() => UserDTO)
  // async updateUser(@Args('id') id: string, body: UpdateUserDto) {
  //     return this.userService.update(id, body);
  // }

  @Query(() => MessageDTO) // Delete user by id
  async deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
