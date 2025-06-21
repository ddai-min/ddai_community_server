import { PickType } from "@nestjs/mapped-types";
import { UserModel } from "src/users/entities/user.entity";

export class SignupDto extends PickType(UserModel, ['email', 'password', 'userName']) { }