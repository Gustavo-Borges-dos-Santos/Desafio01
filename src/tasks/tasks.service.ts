//O serviço manipula os dados da tarefa e aplica as regras de negócio

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  // Criar uma nova tarefa
  async createTask(title: string, createdBy: string, description?: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description, status: 'pending', createdBy });
    return await this.taskRepository.save(task);
  }
  



  // Listar todas as tarefas
  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Buscar uma tarefa pelo ID
  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({ where: { id } });
  }

// Atualizar uma tarefa
async updateTask(id: number, status: 'pending' | 'in_progress' | 'completed'): Promise<Task | null> {
  const task = await this.getTaskById(id);
  if (!task) return null;

  task.status = status;
  return this.taskRepository.save(task);
}


  // Deletar uma tarefa
  async deleteTask(id: number): Promise<boolean> {
    const result = await this.taskRepository.delete(id);
    return (result.affected ?? 0) > 0; // Usa "?? 0" para evitar erro se for null/undefined
  }
  
  }

