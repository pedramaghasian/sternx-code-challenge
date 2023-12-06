import { ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskService } from '../../domain/services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'CreateTask')
  async CreateTask(data, metadata, call: ServerUnaryCall<any, any>) {
    return this.taskService.createTask(data);
    // return {
    //   id: 'pedram',
    //   title: 'pedram',
    //   description: 'pedram',
    //   parent_id: 'pedram',
    //   created_at: 'pedram',
    //   updated_at: 'pedram',
    // };
  }
}
