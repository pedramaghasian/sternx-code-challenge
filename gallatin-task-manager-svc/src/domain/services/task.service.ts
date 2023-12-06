import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../infrastructure/repositories/task.repository';
import { EventRepository } from '../../infrastructure/repositories/event.repository';

@Injectable()
export class TaskService {
  constructor(
    private taskRepo: TaskRepository,
    private eventRepo: EventRepository,
  ) {}

  async getTasks(data) {
    const result = await this.taskRepo.getTasks(data);
    return result;
  }

  async createTask(data) {
    const result = await this.taskRepo.createTask(data);
    this.eventRepo.sendLogEvent(data, 'taskCreated');
    return result;
  }

  async updateTask(data) {
    const result = await this.taskRepo.updateTask(data);
    this.eventRepo.sendLogEvent(data, 'taskUpdated');
    return result;
  }

  async removeTask(id) {
    const result = await this.taskRepo.removeTask(id);
    this.eventRepo.sendLogEvent(id, 'taskDeleted');
    return result;
  }
}
