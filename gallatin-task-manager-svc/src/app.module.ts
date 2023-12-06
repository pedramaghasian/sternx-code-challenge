import { Module } from '@nestjs/common';
import { TaskController } from './application/grpc/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';
import { Task } from './domain/entities/task.entity';
import { TaskRepository } from './infrastructure/repositories/task.repository';
import { TaskService } from './domain/services/task.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.get<string>('sql.type'),
      host: config.get<string>('sql.host'),
      port: config.get<number>('sql.port'),
      username: config.get<string>('sql.username'),
      password: config.get<string>('sql.password'),
      database: config.get<string>('sql.db'),
      entities: [Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class AppModule {}
