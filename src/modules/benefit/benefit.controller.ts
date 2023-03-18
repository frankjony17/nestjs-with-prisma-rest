import { Controller, Get } from '@nestjs/common';
import { BenefitService } from './benefit.service';

@Controller()
export class BenefitController {
  constructor(private readonly appService: BenefitService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
