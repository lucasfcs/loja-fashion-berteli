import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { WhitdrawMovementDto } from './dto/whitdraw-movement.dto';

@Injectable()
export class MovementsService {
  constructor(private readonly prismaService: PrismaService) {}
  // async createEntrance(data: EntranceMovementDto | any): Promise<any> {
  //   await this.prismaService.entrance.create({
  //     data: {
  //       nameProduct: data.nameProduct,
  //       order: '1234',
  //       products: {
  //         connect: {
  //           name: data.nameProduct,
  //         },
  //         createdBy: 1,
  //       },
  //     },
  //   });
  // }

  async whitdrawMovement(
    data: WhitdrawMovementDto,
  ): Promise<{ message: string }> {
    await this.prismaService.whitdraw.create({
      data: {
        nameProduct: data.nameProduct,
        orderPurchase: data.orderPurchase,
        amountWhitdraw: data.amountWhitdraw,
        Payment: {
          connect: {
            typePayment: data.typePayment,
          },
        },
        Stock: {
          connect: {
            id: data.id,
          },
        },

        createdBy: 1,
      },
    });

    const x = await this.prismaService.stock.findFirst({
      where: {
        id: data.id,
      },
      select: {
        ammount: true,
      },
    });

    if (x) {
      const newAmmount = x.ammount - data.amountWhitdraw;
      await this.prismaService.stock.update({
        where: {
          id: data.id,
        },
        data: {
          ammount: newAmmount,
        },
      });
    }
    console.log(x);
    return { message: 'deu certo' };
  }

  // async getAllMovement(): Promise<any> {
  //   const data = await this.prismaService.whitdraw.findMany({
  //     select: {
  //       id: true,
  //       nameProduct: true,
  //       amount: true,
  //       Payment: {
  //         select: { typePayment: true },
  //       },
  //       Product: {
  //         select: {
  //           saleValue: true,
  //         },
  //       },
  //     },
  //   });

  // Filtre os resultados para incluir apenas transações de "Débito"
  // const debitTransactions = data.filter((item) =>
  //   item.Payment.some(
  //     (payment) => (
  //       payment.typePayment === 'Debito',
  //       'Credito',
  //       'Pendente',
  //       'Credito em 2x',
  //       'Credito em 3x'
  //     ),
  //   ),
  // );

  // Calcule o valor total das transações de "Débito"
  // const totalDebitAmount = debitTransactions.reduce((total, item) => {
  //   return (
  //     total +
  //     Number(item.Product[0].saleValue.replace('R$', '').replace(',', '.'))
  //   );
  // }, 0);

  // return totalDebitAmount;
  // }
}
