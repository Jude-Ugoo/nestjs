import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './paln.controller';

@Module({
  providers: [PlanService],
  controllers: [PlanController],
  exports: [PlanService],
})
export class PlanModule {}
