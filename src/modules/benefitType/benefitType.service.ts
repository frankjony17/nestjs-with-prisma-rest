import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/services/prisma.service';
import { Prisma, BenefitType } from '@generated/prisma-client';

@Injectable()
export class BenefitTypeService {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<BenefitType[]> {
    return await this.prisma.benefitType.findMany();
  }

  async create(data: Prisma.BenefitTypeCreateInput): Promise<BenefitType> {
    return this.prisma.benefitType.create({
      data,
    });
  }
}
