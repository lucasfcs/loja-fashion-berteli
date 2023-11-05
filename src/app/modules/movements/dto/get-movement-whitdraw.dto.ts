import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '@prisma/client';

export class GetMovementWhitdrawDto {
  @ApiProperty()
  payments!: Payment;
}
