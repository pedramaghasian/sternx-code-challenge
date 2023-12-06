import { ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskService } from '../../domain/services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'CreateTask')
  async createTask(data, metadata, call: ServerUnaryCall<any, any>) {
    return this.taskService.createTask(data);
  }

  @GrpcMethod('TaskService', 'UpdateTask')
  async updateTask(data, metadata, call: ServerUnaryCall<any, any>) {
    return this.taskService.updateTask(data);
  }

  @GrpcMethod('TaskService', 'DeleteTask')
  async deleteTask(data, metadata, call: ServerUnaryCall<any, any>) {
    return this.taskService.removeTask(data);
  }

  @GrpcMethod('TaskService', 'GetTasks')
  async getTasks(data, metadata, call: ServerUnaryCall<any, any>) {
    return this.taskService.getTasks(data);
  }
}
