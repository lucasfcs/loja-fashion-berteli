import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { type CreateProductDto } from './dto/create-product-dto';
import { GetProductsDto } from './dto/get-product-dto';
import {
  UpdateProductResponseDto,
  type UpdateProductDto,
} from './dto/update-product-dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}
  async createProduct(data: CreateProductDto): Promise<{ message: string }> {
    const findProductExist = await this.prismaService.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (findProductExist) {
      throw new NotFoundException('Produto já registrado!');
    }

    const maxBarcode = await this.prismaService.product.findFirst({
      orderBy: { barcode: 'desc' },
      select: { barcode: true },
      where: {
        barcode: {
          contains: data.category,
        },
      },
    });
    const numeros = maxBarcode?.barcode.match(/\d+/);
    const result = numeros ? numeros[0] : 0;

    const transform = +result + 1;

    const nextBarcode = `${data.category}-${transform
      .toString()
      .padStart(6, '0')}`;

    const x = await this.prismaService.product.create({
      data: {
        name: data.name,
        barcode: nextBarcode,
        purchaseValue: data.purchaseValue,
        saleValue: data.saleValue,
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: data.description,
        color: data.color,
        size: data.size,
        category: {
          connectOrCreate: {
            create: {
              category: data.category,
            },
            where: {
              category: data.category,
            },
          },
        },
      },
    });

    console.log(x);
    return { message: 'Produto criado com sucesso.' };
  }

  async getProducts(id: string): Promise<GetProductsDto[]> {
    const result = await this.prismaService.product.findMany({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        barcode: true,
        color: true,
        purchaseValue: true,
        saleValue: true,
        size: true,
      },
    });
    return result;
  }

  async updateProduct(
    data: UpdateProductDto,
  ): Promise<UpdateProductResponseDto> {
    const x = await this.prismaService.product.update({
      where: {
        barcode: data.barcode,
      },
      data: {
        name: data.name,
        description: data.description,
        saleValue: data.saleValue,
        size: data.size,
        updatedAt: new Date(),
      },
    });
    return x;
  }

  async softDelete(barcode: string): Promise<{ message: string }> {
    if (!barcode) {
      throw new BadRequestException('Favor inserir um código do produto.');
    }

    const product = await this.prismaService.product.findUnique({
      where: {
        barcode,
      },
      select: {
        status: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    if (product.status) {
      await this.prismaService.product.update({
        where: {
          barcode,
        },
        data: {
          status: false,
        },
      });

      return { message: 'Status alterado com sucesso' };
    } else {
      await this.prismaService.product.update({
        where: {
          barcode,
        },
        data: {
          status: true,
        },
      });

      return { message: 'Status alterado com sucesso' };
    }
  }
}
