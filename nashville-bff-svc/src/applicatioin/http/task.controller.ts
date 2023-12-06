import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from '../../domain/services/task.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTaskDto } from '../dto/create-task.dto';

@Controller('/task')
@ApiTags('Task - Service')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task created successfully',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  createTask(@Body() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }

  @Get()
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Put(':taskId')
  updateTask(): string {
    return this.taskService.updateTask();
  }

  @Delete(':taskId')
  removeTask(): string {
    return this.taskService.removeTask();
  }
}
