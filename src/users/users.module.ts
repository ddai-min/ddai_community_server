import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BoardsModule } from 'src/boards/boards.module';
import { ChatsModule } from 'src/chats/chats.module';
import { UserModel } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from 'src/boards/comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserModel,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
