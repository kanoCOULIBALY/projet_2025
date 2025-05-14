import { Module } from '@nestjs/common';
import { AuditLogsService } from './auditLogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLog } from './models/audit_log.model';
import { AuditLogMutationResolver } from './resolvers/auditLog.mutations.resolver';
import { User } from 'src/users/models/users.model';

@Module({
    imports: [TypeOrmModule.forFeature([AuditLog, User])],
    providers: [AuditLogsService, AuditLogMutationResolver],
})
export class AuditLogsModule {}
