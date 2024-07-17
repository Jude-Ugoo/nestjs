import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

@Injectable()
export class CheckoutService {
  private prisma = new PrismaClient();
  private stripe: Stripe;

  constructor(private configService: ConfigService) {}

  async handleCheckout(userId: string, planId: string, paymentDetails: any) {
    try {
      const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
      if (!plan) throw new BadRequestException('Invalid plan ID');

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: plan.price * 100,
        currency: 'usd',
        customer: userId,
        payment_method: paymentDetails.paymentMethodId,
        confirm: true,
        // confirm_options: {
        //     return_url: this.configService.get('APP_URL') + '/payment-success',
        // },
      });

      await this.prisma.transaction.create({
        data: {
          userId,
          planId,
          status: paymentIntent.status,
        },
      });

      return { message: 'Payment sucessful. Plan activated.' };
    } catch (error) {
      throw new BadRequestException('Payment failed');
    }
  }
}
