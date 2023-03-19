import { Injectable } from '@nestjs/common';

@Injectable()
export class BenefitService {
  getBenefit(): string {
    return 'Hello World!';
  }
}
