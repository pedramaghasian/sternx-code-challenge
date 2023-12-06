import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class TaskGrpcRepository implements OnModuleInit {
  private grpcClient;

  constructor(@Inject('TASK_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcClient = this.client.getService('TaskService');
  }

  createTask(data): Observable<{ tasks }> {
    return this.grpcClient.createTask(data);
  }

  updateTask(id: string, data): Observable<{ tasks }> {
    return this.grpcClient.updateTask({ id, ...data });
  }

  getTasks(pagination): Observable<{ tasks }> {
    return this.grpcClient.getTasks(pagination);
  }

  removeTask(id: string): Observable<{ tasks }> {
    return this.grpcClient.deleteTask({ id });
  }
}
