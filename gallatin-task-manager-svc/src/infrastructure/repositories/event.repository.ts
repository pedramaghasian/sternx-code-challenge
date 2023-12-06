import { Injectable } from '@nestjs/common';

import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class EventRepository {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  sendLogEvent(data) {
    this.amqpConnection.publish('exchange1', 'routing-key', {
      msg: data,
    });
  }
}
