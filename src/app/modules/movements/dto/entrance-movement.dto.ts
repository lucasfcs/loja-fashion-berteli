import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class EntranceMovementDto {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  id!: number;

  @ApiProperty({
    example: 'Body',
  })
  @IsString()
  nameProduct!: string;

  @ApiProperty({
    example: '123',
  })
  @IsString()
  order!: string;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  amount!: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  createdBy!: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  stockId!: number;
}
