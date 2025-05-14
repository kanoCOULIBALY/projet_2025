import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuditLogsService } from "../auditLogs.service";
import { AuditLogCreateInput, AuditLogCreateOutput } from "../dto/auditLog-create.dto";
import { AuditLog } from "../models/audit_log.model";



@Resolver(AuditLog)
export class AuditLogMutationResolver {
    constructor(
        private readonly auditLogsService: AuditLogsService
    ) {}

    @Mutation(() => AuditLogCreateOutput)
    async auditLogCreate(
        @Args('input') input: AuditLogCreateInput,
    ){
        return this.auditLogsService.auditLogCreate(input);
    }
}