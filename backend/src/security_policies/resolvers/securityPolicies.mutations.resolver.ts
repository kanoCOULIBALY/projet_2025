import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { SecurityPolicies } from "../models/security_policies.model";
import { SecurityPoliciesService } from "../security_policies.service";
import { SecurityPoliciesCreateInput, SecurityPoliciesCreateOutput } from "../dto/securityPolicies-create.dto";


@Resolver(SecurityPolicies)
export class SecurityPoliciesMutationResolver {
    constructor(
        private readonly securityPoliciesService: SecurityPoliciesService,
    ) {}

    @Mutation(() => SecurityPoliciesCreateOutput)
    async securityPoliciesCreate(
        @Args('input') input: SecurityPoliciesCreateInput,
    ) {
        return this.securityPoliciesService.securityPoliciesCreate(input);
    }
}