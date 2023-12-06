import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
import { TaskService } from 'src/domain/services/task.service';
import { PaginationDto } from '../dto/pagination.dto';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@WebSocketGateway()
export class TaskManagementSocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly taskService: TaskService) {}

  private readonly logger = new Logger(TaskManagementSocketGateway.name);

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('ping')
  handleMessaged(client: any, data: any) {
    console.log({ data });
    this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${data}`);
    return {
      event: 'pong',
      data,
    };
  }

  @SubscribeMessage('getTasks')
  handleMessageGet(@MessageBody() data: PaginationDto) {
    return this.taskService.getTasks(data);
  }

  @SubscribeMessage('createTask')
  handleMessageCreate(client: any, @MessageBody() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }

  @SubscribeMessage('updateTask')
  handleMessageUpdate(
    client: any,
    @MessageBody() data: { id: string; body: UpdateTaskDto },
  ) {
    return this.taskService.updateTask(data.id, data.body);
  }

  @SubscribeMessage('deleteTask')
  handleMessageDelete(client: any, @MessageBody() taskId: string) {
    return this.taskService.removeTask(taskId);
  }
}
