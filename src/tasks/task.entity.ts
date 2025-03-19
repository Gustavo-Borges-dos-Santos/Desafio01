import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../project/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'in_progress' | 'completed';

  @Column()
  createdBy: string;

  @Column({ nullable: true })
  userAssigned: string;

  @Column({ nullable: true })
  points: number;

  @Column({ type: 'date', nullable: true })
  initialDateExpected: string;

  @Column({ type: 'date', nullable: true })
  endDateExpected: string;

  @Column({ type: 'date', nullable: true })
  initialDate: string;

  @Column({ type: 'date', nullable: true })
  endDate: string;

  @ManyToOne(() => Project, (project) => project.id)
  project: Project;
}

