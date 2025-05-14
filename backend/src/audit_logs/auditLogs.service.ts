import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLogCreateInput, AuditLogCreateOutput } from './dto/auditLog-create.dto';
import { AuditLog } from './models/audit_log.model';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/models/users.model';

@Injectable()
export class AuditLogsService {
    constructor(
        @InjectRepository(AuditLog)
        private readonly auditLogRepository: Repository<AuditLog>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async auditLogCreate(input: AuditLogCreateInput): Promise<AuditLogCreateOutput> {
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });
        
        if (!user) {
            throw new Error('User not found');
        }

        const newAuditLog = this.auditLogRepository.create({
            actionType: input.actionType,
            targetObject: input.targetObject,
            ipAddress: input.ipAddress,
            user,  
        });

        const auditLog = await this.auditLogRepository.save(newAuditLog);
        return { auditLog };
    }
}
  
