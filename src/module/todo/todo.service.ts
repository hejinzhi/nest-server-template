import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { TodoEntity } from '../../entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find({ isActive: true });
  }

  async remove(id: number): Promise<UpdateResult> {
    return await this.todoRepository.update(
      { id },
      {
        isActive: false,
      },
    );
  }

  async add(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.save(todo);
  }
}
