import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find({ isActive: true });
  }

  async remove(id: number) {
    return await this.todoRepository.update(
      { id },
      {
        isActive: false,
      },
    );
  }

  async add(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }
}
