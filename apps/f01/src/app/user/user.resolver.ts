import { Resolver, Query, Mutation, Args, ResolveProperty } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserInput } from "./inputs/user.input";
import { UserDTO, MessageDTO } from "@movie-ms/dto";
import { SigninInput } from './inputs/signin.input';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [UserDTO])
    async users() {
        return this.userService.findAll();
    }

    @Query(() => UserDTO)
    async findUser(@Args('id') id: string) {
      return await this.userService.findOneById(id);
    }

    @Mutation(() => UserDTO)
    async createUser(@Args('input') input: SigninInput) {
        return this.userService.create(input);
    }

    // @Mutation(() => UserDTO)
    // async updateUser(@Args('id') id: string, body: UpdateUserDto) {
    //     return this.userService.update(id, body);
    // }

    @Query(() => MessageDTO)
    async deleteUser(@Args('id') id: string) {
        return this.userService.delete(id);
    }
}