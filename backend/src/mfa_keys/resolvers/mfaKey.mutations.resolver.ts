import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { MfaKey } from "../models/mfa_key.model";
import { MfaKeysService } from "../mfa_keys.service";
import { MfaKeyCreateInput, MfaKeyCreateOutput } from "../dto/mfaKey-create.dto";





@Resolver(MfaKey)
export class MfaKeyMutationsResolver {
    constructor(
        private readonly mfaKeyService: MfaKeysService,
    ) {}

    @Mutation(() => MfaKeyCreateOutput)
    async mfaKeyCreate(
        @Args('input') input: MfaKeyCreateInput,
    ){
        return this.mfaKeyService.mfaKeyCreate(input);
    }

}    