import { Controller, Get } from '@nestjs/common';
import { BenefitTypeService } from './benefitType.service';
import { BenefitType } from '@generated/prisma-client';

@Controller()
export class BenefitTypeController {
  constructor(private readonly appService: BenefitTypeService) {}

  @Get('type')
  async getBenefitType(): Promise<BenefitType[]> {
    return this.appService.getBenefitType();
  }
}
