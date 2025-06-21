import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BoardsModule, ChatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
