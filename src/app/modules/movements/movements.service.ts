import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { WhitdrawMovementDto } from './dto/whitdraw-movement.dto';

@Injectable()
export class MovementsService {
  constructor(private readonly prismaService: PrismaService) {}
  // async CreateEntrance(data: any): Promise<any> {
  //   const x = await this.prismaService.whitdraw.create({
  //     data: {
  //       createdBy: 1,
  //       nameProduct: data.nameProduct,
  //       orderPurchase: data.orderPurchase,
  //       amount: data.amount,
  //     },
  //   });
  //   console.log(x);
  // }

  async whitdrawMovement(
    data: WhitdrawMovementDto,
  ): Promise<{ message: string }> {
    const x = await this.prismaService.whitdraw.create({
      data: {
        nameProduct: data.nameProduct,
        orderPurchase: '123',
        amount: data.amount,
        products: {
          connect: {
            id: data.id,
          },
        },
        payments: {
          connect: {
            typePayment: data.typePayment,
          },
        },
        createdBy: 1,
      },
    });
    return { message: 'deu certo' };
  }

  // async getAllMovementWhitdraw(data: GetMovementWhitdrawDto): Promise<any> {
  //   const x = await this.prismaService.whitdraw.findMany({
  //     where: {
  //       payments: data.payment,
  //     },
  //     select: {
  //       products: {
  //         select: {
  //           saleValue: true,
  //         },
  //       },
  //     },
  //   });
  //   return x;
  // }
}
