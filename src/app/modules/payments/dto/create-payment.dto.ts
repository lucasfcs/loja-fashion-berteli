import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  typePayment!: string;
}
