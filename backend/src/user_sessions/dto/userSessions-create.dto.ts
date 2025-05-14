import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { UserSession } from "../models/user_sessions.model";


@InputType()
export class UserSessionCreateInput {
    @Field(() => String)
    ip_address: string;

    @Field(() => Date)
    expires_at: Date;

    @Field(() => String)
    userId: String;
}

@ObjectType()
export class UserSessionCreateOutput {
    @Field(()=> UserSession)
    userSession: UserSession;
}