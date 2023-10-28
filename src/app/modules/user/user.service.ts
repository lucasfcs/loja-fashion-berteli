import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';
import { type CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<{ message: string }> {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    await this.prismaService.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        createdBy: data.createdBy,
      },
    });
    console.log(data);

    return { message: 'User created' };
  }
}
