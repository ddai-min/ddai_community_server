import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { BoardModel } from "src/boards/entities/board.entity";
import { BaseModel } from "src/common/entities/base.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { RolesEnum } from "../const/roles.const";
import { MemberEnum } from "../const/member.const";
import { Exclude } from "class-transformer";
import { ReportRecordModel } from "./report-record.entity";
import { CommentModel } from "src/boards/comments/entities/comment.entity";
import { ChatModel } from "src/chats/entities/chat.entity";

@Entity()
export class UserModel extends BaseModel {
    @Column()
    @IsString()
    userName: string;

    @Column({
        type: 'enum',
        enum: MemberEnum,
    })
    @IsEnum(MemberEnum)
    isAnonymous: MemberEnum;

    @Column({
        unique: true,
        nullable: true,
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @Column()
    @Exclude({
        toPlainOnly: true,
    })
    password: string;

    @Column({
        type: 'enum',
        enum: RolesEnum,
        default: RolesEnum.USER,
    })
    @IsEnum(RolesEnum)
    role: RolesEnum

    @OneToMany(() => BoardModel, (board) => board.user)
    boards: BoardModel[];

    @OneToMany(() => CommentModel, (comment) => comment.user)
    comments: CommentModel[];

    @OneToMany(() => ChatModel, (chat) => chat.user)
    chats: ChatModel[];

    // 신고한 목록
    @OneToMany(() => ReportRecordModel, (reportRecord) => reportRecord.reportUser)
    reportRecords: ReportRecordModel[];

    // 신고당한 목록
    @OneToMany(() => ReportRecordModel, (reportRecord) => reportRecord.reportedUser)
    reportedRecords: ReportRecordModel[];

    // 차단한 유저 목록
    @ManyToMany(() => UserModel, (user) => user.blockedUsers)
    @JoinTable()
    blockUsers: UserModel[];

    // 차단당한 유저 목록
    @ManyToMany(() => UserModel, (user) => user.blockUsers)
    blockedUsers: UserModel[];
}
