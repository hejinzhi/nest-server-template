import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../../app.service';
import { ApiQuery, ApiBody } from '@nestjs/swagger';

interface DeleteProps {
  id: number;
}

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @ApiBody({
    required: true,
    type: Todo,
  })
  @Post()
  async addTask(@Body() body: Todo) {
    return await this.todoService.add(body);
  }

  @ApiQuery({
    name: 'id',
    required: false,
    type: Number,
  })
  @Get('/delete/:id')
  async deleteToDo(@Param() params: DeleteProps) {
    const res = await this.todoService.remove(params.id);
    return {
      affected: res?.affected || 0,
    };
  }
}