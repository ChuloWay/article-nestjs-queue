import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { QueueModule } from 'src/queues/queue.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), QueueModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
