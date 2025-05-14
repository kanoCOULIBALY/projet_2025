import { Module } from '@nestjs/common';
import { SecurityPoliciesService } from './security_policies.service';
import { SecurityPolicies } from './models/security_policies.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityPoliciesMutationResolver } from './resolvers/securityPolicies.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SecurityPolicies])],
  providers: [SecurityPoliciesService, SecurityPoliciesMutationResolver],
})
export class SecurityPoliciesModule {}
