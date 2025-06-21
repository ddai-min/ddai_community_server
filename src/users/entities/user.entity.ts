import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { BoardModel } from "src/boards/entities/board.entity";
import { BaseModel } from "src/common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { RolesEnum } from "../const/roles.const";
import { MemberEnum } from "../const/member.const";
import { Exclude } from "class-transformer";

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
    boards: BoardModel;
}
