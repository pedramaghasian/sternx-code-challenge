import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import config from 'config';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();
  app.use(compression());

  const PORT = config.get<number>('app.port') || 3000;
  const VERSION = config.get<number>('swagger.version');
  const TITLE = config.get<string>('swagger.title');
  const swaggerOptions = new DocumentBuilder()
    .setTitle(TITLE)
    .setVersion(VERSION)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT);
}
bootstrap();
