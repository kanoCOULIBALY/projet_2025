import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { SecurityPolicies } from "../models/security_policies.model";


@InputType()
export class SecurityPoliciesCreateInput {
    @Field(() => String)
    policy_name: string;

    @Field(() => String)
    description: string;
}

@ObjectType()
export class SecurityPoliciesCreateOutput {
    @Field(() => SecurityPolicies)
    securityPolicies: SecurityPolicies;
}