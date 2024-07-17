import { Controller, Get } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  async getPlans() {
    const plans = await this.planService.getPlans();
    return { plans };
  }
}
