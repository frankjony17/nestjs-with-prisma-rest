import { Module } from '@nestjs/common';
import { BenefitTypeController } from './benefitType.controller';
import { BenefitTypeService } from './benefitType.service';
import { PrismaService } from '../../common/services/prisma.service';

@Module({
  imports: [],
  controllers: [BenefitTypeController],
  providers: [PrismaService, BenefitTypeService],
})
export class BenefitTypeModule {}
