import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity'; // Ajuste o caminho se necessário
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Task],
      synchronize: true, // ⚠️ Apenas para desenvolvimento
    }),
    TasksModule,
  ],
})
export class AppModule {}
