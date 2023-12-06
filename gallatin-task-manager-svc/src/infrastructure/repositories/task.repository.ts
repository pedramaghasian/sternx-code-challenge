import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../domain/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(Task)
    private taskModel: Repository<Task>,
  ) {}

  createTask(data) {
    return this.taskModel.save(data);
  }

  async updateTask(data) {
    const { id, ...rest } = data;
    await this.taskModel.update(id, {
      ...rest,
    });
    return data;
  }

  async removeTask(id) {
    await this.taskModel.delete(id);
    return id;
  }

  async getTasks(data) {
    const { page = 1, limit = 10 } = data;
    const skip = (page - 1) * limit;
    const tasksArray = await this.taskModel.find({
      skip,
      take: limit,
    });
    return { tasks: tasksArray };
  }
}
