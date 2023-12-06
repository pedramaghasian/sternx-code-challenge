import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'logger-routing-key',
    queue: 'logs-queue',
  })
  public async pubSubHandler(msg) {
    console.log(JSON.stringify(msg));
  }
}
