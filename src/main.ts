import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

async function bootstrap() {
  mongoose.connect('mongodb://localhost:27017/nest-blog', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('nestjs blog api')
    .setDescription('a nest demo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
