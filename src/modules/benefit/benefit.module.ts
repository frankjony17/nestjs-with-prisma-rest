import { Module } from '@nestjs/common';
import { BenefitController } from './benefit.controller';
import { BenefitService } from './benefit.service';
import { PrismaService } from '../../common/services/prisma.service';

@Module({
  imports: [],
  controllers: [BenefitController],
  providers: [PrismaService, BenefitService],
})
export class BenefitModule {}
