import { IsIn } from 'class-validator';

export class UpdateTaskDto {
  @IsIn(['pending', 'in_progress', 'completed'], { message: 'Status inválido. Use: pending, in_progress ou completed' })
  status: 'pending' | 'in_progress' | 'completed';
}

