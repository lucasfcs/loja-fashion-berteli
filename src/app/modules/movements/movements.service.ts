import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MovementsService {
  constructor(private readonly prismaService: PrismaService) {}
  async CreateEntrance(data: any): Promise<any> {
    const x = await this.prismaService.whitdraw.create({
      data: {
        createdBy: 1,
        nameProduct: data.nameProduct,
        orderPurchase: data.orderPurchase,
        amount: data.amount,
      },
    });
    console.log(x);
  }
}
