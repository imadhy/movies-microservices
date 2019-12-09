import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SigninInput } from './inputs/signin.input';
import { UserDTO } from '@movie-ms/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  // validateUser need more search for decrypt pass
  async validateUser(email: string, pass: string): Promise<UserDTO> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Simple login without password verification
  async login(s: SigninInput): Promise<string | undefined>  {
    const u = await this.usersService.findOneByEmail(s.email)
    const payload = { email: u.email, sub: u.id };
    return this.jwtService.sign(payload)
  }
}
