import { Injectable } from '@nestjs/common';

import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class EventRepository {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  sendLogEvent(data, eventName) {
    this.amqpConnection.publish('exchange1', 'logger-routing-key', {
      eventName,
      data,
    });
  }
}
