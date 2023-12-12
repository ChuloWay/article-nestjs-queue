import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.file';
import { ProducerService } from './producer.file';

@Module({
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService],
})
export class QueueModule {}
