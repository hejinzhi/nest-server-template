import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from './snake-naming.strategy';

export default {
  type: 'mysql',
  host: '*****',

  username: '*****',
  password: '*****',
  database: '*****',

  port: 3306,
  synchronize: true,

  logging: ['error'],
  maxQueryExecutionTime: 500,
  timezone: 'Z',
  entities: [__dirname + '/../entity/**/*.entity.{ts,js}'],
  subscribers: [__dirname + '/../subscriber/**/*.subscriber.{ts,js}'],
  namingStrategy: new SnakeNamingStrategy(),
} as ConnectionOptions;
