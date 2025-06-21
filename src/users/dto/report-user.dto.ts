import { PickType } from "@nestjs/mapped-types";
import { UserModel } from "../entities/user.entity";
import { ReportRecordModel } from "../entities/report-record.entity";

export class ReportUserDto extends PickType(ReportRecordModel, ['reason']) { }