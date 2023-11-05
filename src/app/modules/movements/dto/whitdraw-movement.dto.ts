import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class WhitdrawMovementDto {
  @ApiProperty()
  @IsNumber()
  id!: number;

  @ApiProperty()
  @IsString()
  orderPurchase!: string;

  @ApiProperty()
  @IsString()
  nameProduct!: string;

  @ApiProperty()
  @IsNumber()
  amount!: number;

  @ApiProperty()
  @IsNumber()
  createdBy!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  @IsString()
  typePayment!: string;
}
