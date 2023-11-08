import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { GetPaymentDto } from './dto/get-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createPayment(data: CreatePaymentDto): Promise<{ message: string }> {
    await this.prismaService.payment.create({
      data: {
        typePayment: data.typePayment,
      },
    });
    return { message: 'Type Payment created' };
  }

  async getAllPayment(): Promise<GetPaymentDto[]> {
    const x = await this.prismaService.payment.findMany();
    return x;
  }

  async getPaymentByName(typePayment: string): Promise<any> {
    console.log(typePayment);
    const x = await this.prismaService.payment.findMany({
      where: {
        typePayment: {
          startsWith: typePayment,
        },
      },
      select: {
        whitdraws: {
          select: {
            Product: {
              select: {
                saleValue: true,
              },
            },
          },
        },
      },
    });
    console.log(x);
    return x;
  }
}
