import { IsString } from "class-validator";
import { BoardModel } from "src/boards/entities/board.entity";
import { BaseModel } from "src/common/entities/base.entity";
import { UserModel } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class CommentModel extends BaseModel {
    @Column()
    @IsString()
    content: string;

    @ManyToOne(() => UserModel, (user) => user.comments)
    user: UserModel;

    @ManyToOne(() => BoardModel, (board) => board.comments)
    board: BoardModel;
}
