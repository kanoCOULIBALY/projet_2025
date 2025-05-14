import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { PasswordResetHistory } from "../models/password_reset_history.model";


@InputType()
export class PasswordResetHistoryCreateInput {
    @Field(() => String)
    resetToken: string;

    @Field(() => Date)
    expiresAt: Date;


    @Field(() => String)
    status: string;

    @Field(() => String) 
    userId: string;
}

@ObjectType()
export class PasswordResetHistoryCreateOutput {
    @Field(() => PasswordResetHistory)
    passwordResetHistory: PasswordResetHistory;
}