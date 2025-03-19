import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsIn(['pending', 'in_progress', 'completed'])
  status: 'pending' | 'in_progress' | 'completed';

  @IsNotEmpty()
  createdBy: string;

  @IsOptional()
  userAssigned?: string;

  @IsOptional()
  points?: number;

  @IsOptional()
  initialDateExpected?: string;

  @IsOptional()
  endDateExpected?: string;

  @IsOptional()
  initialDate?: string;

  @IsOptional()
  endDate?: string;

  @IsNotEmpty()
  project: number;
}
