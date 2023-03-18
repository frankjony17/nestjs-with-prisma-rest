import { Injectable } from '@nestjs/common';

@Injectable()
export class BenefitService {
  getHello(): string {
    return 'Hello World!';
  }
}
