import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();
  async createUser(email: string, name?: string) {
    return this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  async updateUser(id: number, data: { email?: string; name?: string }) {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
