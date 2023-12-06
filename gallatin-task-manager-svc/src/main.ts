import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import config from 'config';

async function bootstrap() {
  const GRPC_SERVER_URL = config.get<string>('grpc.url');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: GRPC_SERVER_URL,
        package: 'task',
        protoPath: join(__dirname, './application/grpc/proto/task.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
