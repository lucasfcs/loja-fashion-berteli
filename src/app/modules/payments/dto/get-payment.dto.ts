import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetPaymentDto {
  @ApiProperty()
  @IsString()
  typePayment!: string;
}
