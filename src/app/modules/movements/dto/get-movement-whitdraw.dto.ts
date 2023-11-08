import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '@prisma/client';

export class getMovimentDto {
  @ApiProperty({
    example: 'Debito',
  })
  payments!: Payment;

  @ApiProperty({
    example: 'Debito',
  })
  typePayments!: string;
}
