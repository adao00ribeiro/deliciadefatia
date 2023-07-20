import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [UserModule, CategoryModule, ProductModule, OrderModule, ItemModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }

  ],
})
export class AppModule { }
