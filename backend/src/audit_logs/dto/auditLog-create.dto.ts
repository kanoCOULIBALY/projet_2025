import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { AuditLog } from "../models/audit_log.model";



@InputType()
export class AuditLogCreateInput {

    @Field(() => String)
    actionType: string;

    @Field(() => String)
    targetObject: string;

    @Field(() => String)
    ipAddress: string;

    @Field(() => String) 
    userId: string;
}

@ObjectType()
export class AuditLogCreateOutput {
    @Field(() => AuditLog)
    auditLog: AuditLog;
}