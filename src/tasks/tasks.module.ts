//declara o módulo Tasks e suas dependências (serviço e repositório)

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // ✅ Importando a entidade Task
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TypeOrmModule], // ✅ Exportando para garantir a injeção correta
})
export class TasksModule {}
