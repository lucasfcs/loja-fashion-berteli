import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from '../modules/user/user.service';
import { type AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async createToken(user: any): Promise<string> {
    return this.jwtService.sign(
      {
        sub: user.id,
        email: user.email,
      },
      {
        expiresIn: '1 day',
        subject: String(user.id),
        issuer: 'fashion-berteli',
        audience: 'users',
      },
    );
  }

  async verifyToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException('Token inválido');
    }
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.prismaService.users.findFirst({
      where: { email, password },
    });
    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }
    return await this.createToken(user);
  }

  // async forget(email: string): Promise<any> {
  //   const user = await this.prismaService.users.findFirst({
  //     where: { email },
  //   });
  //   if (!user) {
  //     throw new UnauthorizedException('E-mail está incorreto');
  //   }
  //   return user;
  // }

  async register(data: AuthRegisterDto): Promise<any | string> {
    const user = await this.userService.createUser(data);

    return await this.createToken(user);
  }
}
