import { Injectable } from '@nestjs/common';
import { ICreateTask } from '../interfaces/create-task.interface';
import { TaskGrpcRepository } from '../../infrastructure/repositories/task/task.repository';

@Injectable()
export class TaskService {

  constructor(private taskGrpcRepo: TaskGrpcRepository) {}

  getTasks(): string {
    return 'Hello World!';
  }
  createTask(data: ICreateTask) {
    return this.taskGrpcRepo.createTask(data);
  }
  updateTask(): string {
    return 'Hello World!';
  }
  removeTask(): string {
    return 'Hello World!';
  }
}
