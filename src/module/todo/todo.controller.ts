import { TodoService } from './todo.service';
import { TodoEntity } from '../../entity/todo.entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface DeleteProps {
  id: number;
}

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<TodoEntity[]> {
    return await this.todoService.findAll();
  }


  @Post()
  async addTask(@Body() body: TodoEntity): Promise<TodoEntity> {
    return await this.todoService.add(body);
  }

  @Get('/delete/:id')
  async deleteToDo(
    @Param() params: DeleteProps,
  ): Promise<{ affected: number }> {
    const res = await this.todoService.remove(params.id);
    return {
      affected: res?.affected || 0,
    };
  }
}
