import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Message, User } from '@movie-ms/dto';
import { UserInput } from './inputs/user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User) // Create User
  async addUser(@Args('input') input: UserInput) {
    return await this.userService.addUser(input);
  }

  @Query(() => [User]) // Find all user in database
  async users() {
    return await this.userService.findAll();
  }

  @Query(() => [User]) // Find one user by id
  async getUserByUserId(@Args('id') id: string) {
    return await this.userService.getUserByUserId(id);
  }

  @Query(() => Message) // Delete user by id
  async deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
