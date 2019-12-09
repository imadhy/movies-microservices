import { Resolver, Args, Mutation} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninInput } from './inputs/signin.input';

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => String) // Login / Signin
    async signin(@Args('input') input: SigninInput) {
      return await this.authService.login(input);
    }
}
