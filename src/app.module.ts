import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TodoModule } from './module/todo/todo.module';
import { PersonModule } from './module/person/person.module';

@Module({
  imports: [
    ConfigModule.resolveRootPath(__dirname).load('config/!(*.d).{ts,js}'),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('ormconfig'),
      inject: [ConfigService],
    }),
    TodoModule,
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
