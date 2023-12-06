import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../infrastructure/repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepo: TaskRepository) {}

  getTasks(): string {
    return 'Hello World!';
  }
  createTask(data) {
    return this.taskRepo.createTask(data);
  }
  updateTask(): string {
    return 'Hello World!';
  }
  removeTask(): string {
    return 'Hello World!';
  }
}
