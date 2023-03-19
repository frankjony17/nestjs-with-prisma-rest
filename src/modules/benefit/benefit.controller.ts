import { Controller, Get } from '@nestjs/common';
import { BenefitService } from './benefit.service';

@Controller()
export class BenefitController {
  constructor(private readonly appService: BenefitService) {}

  @Get()
  getBenefitType(): string {
    return this.appService.getBenefitType();
  }
}
