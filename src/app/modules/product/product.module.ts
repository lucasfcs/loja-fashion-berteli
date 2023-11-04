import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [PrismaModule],

  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
