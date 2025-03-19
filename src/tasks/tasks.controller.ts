//o controler é onde o NestJS vai receber as requisições HTTP

import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}


  
// Criar uma nova tarefa
  @Post()
  createTask(@Body() body: { title: string; description?: string; createdBy: string }): Promise<Task> {
  return this.tasksService.createTask(body.title, body.createdBy, body.description);
  }

  // Listar todas as tarefas
  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  // Buscar uma tarefa pelo ID
  @Get(':id')
  getTaskById(@Param('id') id: number): Promise<Task | null> {
    return this.tasksService.getTaskById(id);
  }

  // Atualizar o status da tarefa
  @Patch(':id')
  
  updateTask(@Param('id') id: number, @Body() body: { status: 'pending' | 'in_progress' | 'completed' }): Promise<Task | null> {
    return this.tasksService.updateTask(id, body.status);
  }
  

  // Deletar uma tarefa pelo ID
  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<boolean> {
    return this.tasksService.deleteTask(id);
  }
}
