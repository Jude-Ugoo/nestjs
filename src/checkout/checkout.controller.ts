import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutServive: CheckoutService) {}

  @Post()
  async checkout(@Body() checkoutDto: CheckoutDto) {
    return this.checkoutServive.handleCheckout(
      checkoutDto.userId,
      checkoutDto.planId,
      checkoutDto.paymentDetails,
    );
  }
}
