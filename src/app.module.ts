import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { MovementsModule } from './modules/movements/movements.module';

@Module({
  imports: [UserModule, ProductModule, MovementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
