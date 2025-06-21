import { BaseModel } from "src/common/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { UserModel } from "./user.entity";
import { IsString } from "class-validator";

@Entity()
export class ReportRecordModel extends BaseModel {
    @ManyToOne(() => UserModel, (user) => user.reportRecords)
    reportUser: UserModel;

    @ManyToOne(() => UserModel, (user) => user.reportedRecords)
    reportedUser: UserModel;

    @Column()
    @IsString()
    reason: string;
}