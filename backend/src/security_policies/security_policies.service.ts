import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SecurityPolicies } from './models/security_policies.model';
import { Repository } from 'typeorm';
import { SecurityPoliciesCreateInput, SecurityPoliciesCreateOutput } from './dto/securityPolicies-create.dto';

@Injectable()
export class SecurityPoliciesService {
    constructor(
        @InjectRepository(SecurityPolicies)
        private readonly securityPoliciesRepository: Repository<SecurityPolicies>,
    ) {}

    async securityPoliciesCreate(input: SecurityPoliciesCreateInput): Promise<SecurityPoliciesCreateOutput> {
        const newSecurityPolicy = this.securityPoliciesRepository.create({
            policyName: input.policy_name,
            description: input.description,
        });

        const securityPolicies = await this.securityPoliciesRepository.save(newSecurityPolicy);
        return { securityPolicies };
    }
}
