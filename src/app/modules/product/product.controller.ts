import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product-dto';
import { GetProductsDto } from './dto/get-product-dto';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create-product')
  async createProduct(
    @Body() data: CreateProductDto,
  ): Promise<{ message: string }> {
    await this.productService.createProduct(data);
    return { message: 'Foi criado produto!' };
  }

  @Get('get-by-id')
  async getProducts(@Query('id') id: string): Promise<GetProductsDto[]> {
    const x = await this.productService.getProducts(id);
    return x;
  }

  @Patch('update-product')
  async updateProduct(@Body() data: any): Promise<any> {
    const x = await this.productService.updateProduct(data);
    return x;
  }

  @Delete('soft-delete')
  async softDelete(
    @Query('barcode') barcode: string,
  ): Promise<{ message: string }> {
    await this.productService.softDelete(barcode);
    return { message: 'Status do Produto alterado com sucesso.' };
  }
}
