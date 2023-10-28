import { ApiProperty } from '@nestjs/swagger';

export class GetProductsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  barcode: string;
  @ApiProperty()
  color: string;
  @ApiProperty()
  purchaseValue: string;
  @ApiProperty()
  saleValue: string;
  @ApiProperty()
  size: string;
}
