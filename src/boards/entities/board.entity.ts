import { IsString } from "class-validator";
import { BaseModel } from "src/common/entities/base.entity";
import { UserModel } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CommentModel } from "../comments/entities/comment.entity";

@Entity()
export class BoardModel extends BaseModel {
    @Column()
    @IsString()
    title: string;

    @Column()
    @IsString()
    content: string;

    @ManyToOne(() => UserModel, (user) => user.boards)
    user: UserModel;

    @OneToMany(() => CommentModel, (comment) => comment.board)
    comments: CommentModel[];
}
