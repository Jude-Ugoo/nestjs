import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CheckoutDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  planId: string;

  @IsObject()
  @IsNotEmpty()
  paymentDetails: {
    paymentMethodId: string;
  };
}
