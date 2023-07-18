import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryResolver } from './category/category.resolver';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, CategoryModule, ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, CategoryResolver],
})
export class AppModule {}
