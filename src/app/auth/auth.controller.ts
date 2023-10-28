import { Body, Controller, Post } from '@nestjs/common';
import { type UserService } from '../modules/user/user.service';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDto): Promise<any> {
    return await this.authService.login(email, password);
  }

  // @Post('register')
  // async register(@Body() body: AuthRegisterDto): Promise<any> {
  //   return this.userService.register(body);
  // }

  // @Post('forget')
  // async login(@Body() {email}: AuthForgetDto) {
  // return await this.authService.forget(email);
  // }
}
