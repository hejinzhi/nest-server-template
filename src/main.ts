import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const whitelist = ['http://todo.mingricy.com'];
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       console.log('allowed cors for:', origin);
  //       callback(null, true);
  //     } else {
  //       console.log('blocked cors for:', origin);
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   allowedHeaders:
  //     'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  //   methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  //   credentials: true,
  // });
  app.enableCors()
  await initSwagger(app);
  app.setGlobalPrefix('/api');
  await app.listen(3000);
  console.log('server running on http://localhost:3000');
}

async function initSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('todo-server')
    .setDescription('The todo-server API Documents')
    .setVersion('1.0')
    // .setBasePath('/api')
    .addBearerAuth()
    // .setSchemes('http', 'https')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}

bootstrap();
