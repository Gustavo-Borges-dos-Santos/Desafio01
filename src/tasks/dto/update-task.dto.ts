import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class UpdateTaskDto {
  @IsEnum(TaskStatus, { message: 'Status inválido. Use: pending, in_progress ou completed' })
  status: TaskStatus;
}
