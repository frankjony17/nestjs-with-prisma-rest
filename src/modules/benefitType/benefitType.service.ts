import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/services/prisma.service';
import { BenefitType } from '@generated/prisma-client';

@Injectable()
export class BenefitTypeService {
  constructor(private prisma: PrismaService) {}

  async getBenefitType(): Promise<BenefitType[]> {
    return await this.prisma.benefitType.findMany();
  }
}
