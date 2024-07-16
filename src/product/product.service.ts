import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {
  private prisma = new PrismaClient();

  async createProduct(
    title: string,
    price: number,
    quantity: number,
    desc?: string,
  ) {
    return this.prisma.product.create({
      data: {
        title,
        desc,
        price,
        quantity,
      },
    });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id: Number(id) },
    });
  }

  async updateProduct(
    id: number,
    data: { title?: string; price?: number; quantity?: number; desc?: string },
  ) {
    return this.prisma.product.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id: Number(id) },
    });
  }
}
