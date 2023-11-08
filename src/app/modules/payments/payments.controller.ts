import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { GetPaymentDto } from './dto/get-payment.dto';
import { PaymentsService } from './payments.service';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async createPayment(
    @Body() data: CreatePaymentDto,
  ): Promise<{ message: string }> {
    await this.paymentsService.createPayment(data);
    return { message: 'Payment created successfully' };
  }

  @Get()
  async getAllPayment(): Promise<GetPaymentDto[]> {
    const x = await this.paymentsService.getAllPayment();
    return x;
  }

  @Get('get-payment-by-typePayment')
  async getPaymentByName(
    @Query('typePayment') typePayment: string,
  ): Promise<any> {
    const x = await this.paymentsService.getPaymentByName(typePayment);
    return x;
  }
}
