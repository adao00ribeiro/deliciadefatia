import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [UserModule, CategoryModule, ProductModule, OrderModule, TesteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
