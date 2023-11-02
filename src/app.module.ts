import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovementsModule } from './app/modules/movements/movements.module';
import { PaymentsModule } from './app/modules/payments/payments.module';
import { ProductModule } from './app/modules/product/product.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [UserModule, ProductModule, MovementsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
