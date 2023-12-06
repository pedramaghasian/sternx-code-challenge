import { Injectable } from '@nestjs/common';
import { ICreateTask } from '../interfaces/create-task.interface';
import { TaskGrpcRepository } from '../../infrastructure/repositories/task/task.repository';
import { IUpdateTask } from '../interfaces/update-task.interface';
import { IPagination } from '../interfaces/pagination.interface';

@Injectable()
export class TaskService {
  constructor(private taskGrpcRepo: TaskGrpcRepository) {}

  getTasks(pagination: IPagination) {
    return this.taskGrpcRepo.getTasks(pagination);
  }

  createTask(data: ICreateTask) {
    return this.taskGrpcRepo.createTask(data);
  }

  updateTask(id: string, data: IUpdateTask) {
    return this.taskGrpcRepo.updateTask(id, data);
  }

  removeTask(id: string) {
    return this.taskGrpcRepo.removeTask(id);
  }
}
