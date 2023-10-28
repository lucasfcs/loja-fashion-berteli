import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Lucas',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'fulano@fulano.com.br',
  })
  @IsString()
  email!: string;

  @ApiProperty({
    example: 'Lucas123@',
  })
  @IsString()
  password!: string;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  createdBy!: number;
}
