import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    return (result.affected ?? 0) > 0;

  }
}