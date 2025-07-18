import { IsString } from "class-validator";
import { BaseModel } from "src/common/entities/base.entity";
import { UserModel } from "src/users/entities/user.entity";
import { Column, ManyToOne } from "typeorm";

export class ChatModel extends BaseModel {
    @Column()
    @IsString()
    content: string;

    @ManyToOne(() => UserModel, (user) => user.chats)
    user: UserModel;
}
