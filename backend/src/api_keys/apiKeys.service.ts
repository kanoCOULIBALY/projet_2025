import { Injectable } from '@nestjs/common';
import { ApiKeyCreateInput, ApiKeyCreateOutput } from './dto/apiKey-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiKey } from './models/apiKey.model';
import { ApiKeyUpdateInput, ApiKeyUpdateOutput } from './dto/apiKey-update.dto';

@Injectable()
export class ApiKeysService {
    constructor(
        @InjectRepository(ApiKey)
        private readonly apiKeyRepository: Repository<ApiKey>,
    ) {}


    async apiKeyCreate(input: ApiKeyCreateInput): Promise<ApiKeyCreateOutput> {

       const newApiKey = this.apiKeyRepository.create(input);
       const apiKey = await this.apiKeyRepository.save(newApiKey);
       return {apiKey};
    }

    async apiKeyUpdate(apiKeyId: ApiKey['id'],
        input: ApiKeyUpdateInput
    ): Promise<ApiKeyUpdateOutput> {
        const apiKey = await this.apiKeyRepository.findOneOrFail({where: {id: apiKeyId}});
        apiKey.apiKey = input.apiKey;
        apiKey.status = input.status;
        apiKey.expiresAt = input.expiresAt;
        await apiKey.save();
        return {apiKey};
    }
}
