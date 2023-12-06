import { Inject, Injectable } from '@nestjs/common';
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

  //   async updateTask(username: string): Promise<any> {
  //     return this.userModel.findOne({ username });
  //   }

  //   async getTasks(email: string): Promise<any> {
  //     return this.userModel.findOne({ email });
  //   }

  //   async deleteTask(id: string, payload: Partial<IUser>) {
  //     return this.userModel.updateOne({ _id: id }, payload);
  //   }
}
