import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;
}
