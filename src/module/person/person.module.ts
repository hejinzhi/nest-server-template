import { PersonEntity } from './../../entity/person.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from 'nestjs-config';


@Module({
  imports: [
    TypeOrmModule.forFeature([PersonEntity]),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get('app.jwtSecret'),
        signOptions: { expiresIn: '24h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [PersonController],
  providers: [PersonService, JwtStrategy],
  exports: [PersonService],
})
export class PersonModule {}
