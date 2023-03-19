import { Controller, Get } from '@nestjs/common';
import { BenefitService } from './benefit.service';

@Controller()
export class BenefitController {
  constructor(private readonly appService: BenefitService) {}

  @Get()
  getBenefit(): string {
    return this.appService.getBenefit();
  }
}
