import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(
    @Body()
    body: {
      title: string;
      price: number;
      quantity: number;
      desc?: string;
    },
  ) {
    return this.productService.createProduct(
      body.desc,
      body.price,
      body.quantity,
      body.title,
    );
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body()
    body: {
      id: number;
      title?: string;
      price?: number;
      quantity?: number;
      desc?: string;
    },
  ) {
    return this.productService.updateProduct(+id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(+id);
  }
}
