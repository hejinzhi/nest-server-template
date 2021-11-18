import { Column, Entity, Index } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
// import { ApiModelPropertyOptional } from '@nestjs/swagger';
// import { IsOptional } from 'class-validator';

@Entity('person')
export class PersonEntity extends AbstractEntity {
  @Column({
    default: '',
  })
  name: string;

  @Column({
    default: '',
  })
  password: string;

  @Column({
    default: '',
  })
  tel: string;

  @Column({
    default: '',
  })
  role: string;

  @Index()
  @Column({
    nullable: true,
  })
  deptId: string;

  @Column({
    default: false,
  })
  isSuper: boolean;

  @Column({
    default: '',
    length: 512,
  })
  powers: string;
}
