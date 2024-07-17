import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PlanService {
  private prisma = new PrismaClient();

  //   async createPlan(userId: number, planData: any) {
  //     return this.prisma.plan.create({
  //       data: {
  //         userId,
  //         title: planData.title,
  //         description: planData.description,
  //         duration: planData.duration,
  //         frequency: planData.frequency,
  //         amount: planData.amount,
  //       },
  //     });
  //   }

  async getPlans() {
    return this.prisma.plan.findMany();
  }
}
