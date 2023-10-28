import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUppercase } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: 'BODY-000001',
  })
  @IsString()
  barcode?: string;

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
    example: 'R$30,00',
  })
  @IsString()
  saleValue!: string;

  @ApiProperty({
    example: 'M',
  })
  @IsString()
  size?: string | null;

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
  updatedAt!: Date;

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

export class UpdateProductResponseDto {
  @ApiResponseProperty()
  id: number;
  @ApiResponseProperty()
  name: string;
  @ApiResponseProperty()
  description: string;
  @ApiResponseProperty()
  barcode: string;
  @ApiResponseProperty()
  color: string;
  @ApiResponseProperty()
  size: string;
  @ApiResponseProperty()
  purchaseValue: string;
  @ApiResponseProperty()
  saleValue: string;
  @ApiResponseProperty()
  status: boolean;
  @ApiResponseProperty()
  createdBy: number;
  @ApiResponseProperty()
  createdAt: Date;
  @ApiResponseProperty()
  updatedBy: number;
  @ApiResponseProperty()
  updatedAt: Date;
  @ApiResponseProperty()
  categoryId: number;
}
