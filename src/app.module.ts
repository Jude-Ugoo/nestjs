import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PlanModule } from './plan/plan.module';
import { CheckoutService } from './checkout/checkout.service';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [UserModule, ProductModule, PlanModule, CheckoutModule],
  controllers: [AppController],
  providers: [AppService, CheckoutService],
})
export class AppModule {}
