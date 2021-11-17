import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('todo')
export class TodoEntity extends AbstractEntity {
  @Column()
  desc: string;

  @Column({ default: true })
  isActive: boolean;
}
