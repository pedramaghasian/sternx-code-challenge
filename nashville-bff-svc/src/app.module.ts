import { Module } from '@nestjs/common';
import { TaskController } from './applicatioin/http/task.controller';
import { TaskService } from './domain/services/task.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TaskGrpcRepository } from './infrastructure/repositories/task/task.repository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'task',
          protoPath: join(__dirname, './infrastructure/proto/task/task.proto'),
        },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskGrpcRepository],
})
export class AppModule {}
