import { Injectable } from '@nestjs/common';

@Injectable()
export class BenefitService {
  getBenefitType(): string {
    return 'Hello World!';
  }
}
