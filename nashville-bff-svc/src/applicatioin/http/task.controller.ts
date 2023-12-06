import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from '../../domain/services/task.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { PaginationDto } from '../dto/pagination.dto';

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

  @Put(':taskId')
  @ApiOperation({ summary: 'update a task' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task updated successfully',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  updateTask(@Param('taskId') taskId: string, @Body() data: UpdateTaskDto) {
    return this.taskService.updateTask(taskId,data);
  }

  @Get()
  @ApiOperation({ summary: 'get all tasks' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  getTasks(@Query() pagination: PaginationDto) {
    return this.taskService.getTasks(pagination);
  }

  @Delete(':taskId')
  @ApiOperation({ summary: 'update a task' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task updated successfully',
  })
  removeTask(@Param('taskId') taskId: string) {
    return this.taskService.removeTask(taskId);
  }
}
