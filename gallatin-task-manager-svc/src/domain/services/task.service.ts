import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../infrastructure/repositories/task.repository';
import { EventRepository } from '../../infrastructure/repositories/event.repository';

@Injectable()
export class TaskService {
  constructor(
    private taskRepo: TaskRepository,
    private eventRepo: EventRepository,
  ) {}

  getTasks(): string {
    return 'Hello World!';
  }
  
  async createTask(data) {
    const result = await this.taskRepo.createTask(data);
    this.eventRepo.sendLogEvent(data);
    return result;
  }
  updateTask(): string {
    return 'Hello World!';
  }
  removeTask(): string {
    return 'Hello World!';
  }
}
