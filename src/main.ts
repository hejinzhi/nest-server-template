import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // await initSwagger(app);
  app.setGlobalPrefix('/api');
  await app.listen(5432);
  console.log('server running on http://localhost:5432');
}

async function initSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('book-server')
    .setDescription('The book-server API Documents')
    .setVersion('1.0')
    // .setBasePath('/api')
    .addBearerAuth()
    // .setSchemes('http', 'https')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}

bootstrap();
