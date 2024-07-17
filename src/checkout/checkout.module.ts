import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CheckoutService } from './checkout.service';

@Module({
  imports: [ConfigModule],
  providers: [CheckoutService, ConfigService],
  controllers: [CheckoutController],
})
export class CheckoutModule {}
