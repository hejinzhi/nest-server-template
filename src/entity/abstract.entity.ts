'use strict';

import { PrimaryGeneratedColumn, Index, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  // @Index()
  // @Column({
  //   comment: '创建时间',
  //   default: () => 'CURRENT_TIMESTAMP',
  //   type: 'timestamp with time zone',
  // })
  // createdAt: Date;

  @CreateDateColumn({
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    nullable: false,
  })
  updatedAt: Date;

  // @Index()
  // @Column({
  //   comment: '更新时间',
  //   default: () => 'CURRENT_TIMESTAMP',
  //   nullable: true,
  //   type: 'timestamp with time zone',
  // })
  // updatedAt: Date;

  @Index()
  @Column({
    default: '0',
  })
  disabled: string;
}
