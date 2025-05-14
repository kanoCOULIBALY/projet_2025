import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { ApiKeysService } from "../apiKeys.service";
import { ApiKeyCreateInput, ApiKeyCreateOutput } from "../dto/apiKey-create.dto";
import { ApiKey } from "../models/apiKey.model";
import { ApiKeyUpdateInput, ApiKeyUpdateOutput } from "../dto/apiKey-update.dto";


@Resolver(ApiKey)
export class ApiKeyMutationResolver {
    constructor(private readonly apiKeyService: ApiKeysService
    ){}

    @Mutation(()=> ApiKeyCreateOutput)
    // fonction apikeyCreate 
    async apiKeyCreate(
        // un decorateur qui prends les arguments 
        @Args('input') input: ApiKeyCreateInput,)
        {
        return this.apiKeyService.apiKeyCreate(input);
    }

    @Mutation(() => ApiKeyUpdateOutput)
    async apiKeyUpdate(
        @Args({name: 'apiKeyId', type: () => ID})apiKeyId: ApiKey['id'],
        @Args('input') input: ApiKeyUpdateInput)
        {
        return this.apiKeyService.apiKeyUpdate(apiKeyId, input);
    }
    
}