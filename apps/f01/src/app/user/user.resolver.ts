import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { Message, User } from '@movie-ms/dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  
  // @Mutation(() => Message) // Create User / Signup
  // async signup(@Args('input') input: User) {
  //   return this.userService.create(input);
  // }

  @Query(() => [User]) // Find all user in database
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User) // Find one user by id
  async findUser(@Args('id') id: string) {
    return await this.userService.findOneById(id);
  }

  // @Mutation(() => User)
  // async updateUser(@Args('id') id: string, body: UpdateUser) {
  //     return this.userService.update(id, body);
  // }

  @Query(() => Message) // Delete user by id
  async deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}