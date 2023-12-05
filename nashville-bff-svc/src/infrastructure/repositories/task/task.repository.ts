import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';

@Injectable()
export class TaskGrpcRepository implements OnModuleInit {
  //   @Client({
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'task',
  //       protoPath: join(__dirname, '../../proto/task/task.proto'),
  //     },
  //   })
  //   private readonly client: ClientGrpc;

  //   private taskGrpcService;

  //   constructor() {
  //     this.taskGrpcService = this.client.getService('TaskService');
  //   }

  private taskGrpcService;

  constructor(@Inject('TASK_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.taskGrpcService = this.client.getService('TaskService');
  }

  createTask(data): Observable<{ tasks }> {
    return this.taskGrpcService.createTask(data);
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
