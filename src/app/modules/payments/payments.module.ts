import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [PrismaModule],

  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
