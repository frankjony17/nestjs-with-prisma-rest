import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BenefitType } from '@generated/prisma-client';
import { BenefitTypeService } from './benefitType.service';
import { CreateBenefitTypeDto } from '@/modules/benefitType/dto/create-benefit-type.dto';

@ApiTags('Benefit Type')
@Controller('benefit/type')
export class BenefitTypeController {
  constructor(private readonly benefitTypeService: BenefitTypeService) {}

  @Get()
  async getBenefitType(): Promise<BenefitType[]> {
    return this.benefitTypeService.get();
  }

  @Post()
  async draft(
    @Body() createBenefitTypeDto: CreateBenefitTypeDto,
  ): Promise<BenefitType> {
    return this.benefitTypeService.create(createBenefitTypeDto);
  }
}
