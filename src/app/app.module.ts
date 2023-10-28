import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule.forRoot({ isGlobal: true }),
    // JwtAuthModule.register({
    //   secret: 'yourSecretKey',
    //   signOptions: { expiresIn: '12h' },
    // }),

    ProductModule,

    UserModule,
  ],
})
export class AppModule {}
