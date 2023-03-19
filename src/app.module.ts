import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BenefitModule } from './modules/benefit/benefit.module';
import appConfig from './common/configs/app.config';
import { configValidationSchema as validationSchema } from './common/validations/config.validation';
import { BenefitTypeModule } from './modules/benefitType/benefitType.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validationSchema,
    }),
    BenefitTypeModule,
    BenefitModule,
  ],
})
export class AppModule {}
