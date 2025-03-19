import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { Project } from './project/project.entity';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';  // Adicionando o TasksModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Task, Project], // Certifique-se de que Task e Project estão listados nas entidades
      synchronize: true,
    }),
    ProjectModule,
    TasksModule,  // Importando o módulo de tarefas
  ],
})
export class AppModule {}
