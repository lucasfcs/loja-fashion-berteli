import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUppercase } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Body',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'Body preto',
  })
  @IsString()
  description?: string | null;

  @ApiProperty({
    example: 'preto',
  })
  @IsString()
  color?: string | null;

  @ApiProperty({
    example: 'M',
  })
  @IsString()
  size?: string | null;

  @ApiProperty({
    example: 'R$25,00',
  })
  @IsString()
  purchaseValue!: string;

  @ApiProperty({
    example: 'R$30,00',
  })
  @IsString()
  saleValue!: string;

  @ApiProperty({
    example: 'Gabriella',
  })
  @IsString()
  seller!: string;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  createdBy!: number;

  @ApiProperty({
    example: '2023-10-25 07:06:14',
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2023-10-25 07:06:14',
  })
  updatedAt?: Date;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  updatedBy!: number;

  @IsString()
  @IsUppercase()
  @ApiProperty({
    example: 'TI',
  })
  category!: string;
}
