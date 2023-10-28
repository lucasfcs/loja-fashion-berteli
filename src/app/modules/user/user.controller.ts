import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<{ message: string }> {
    await this.userService.createUser(data);
    return { message: 'User created!' };
  }
}
