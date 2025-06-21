import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsGateway } from './chats.gateway';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModel } from './entities/chat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChatModel,
    ]),
  ],
  providers: [ChatsGateway, ChatsService],
})
export class ChatsModule { }
