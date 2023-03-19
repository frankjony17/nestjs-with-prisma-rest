import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBenefitTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
