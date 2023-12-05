import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
