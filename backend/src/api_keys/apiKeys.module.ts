import { Module } from '@nestjs/common';
import { ApiKeysService } from './apiKeys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKey } from './models/apiKey.model';
import { ApiKeyMutationResolver } from './resolvers/apiKey.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ApiKey])],
  providers: [ApiKeysService, ApiKeyMutationResolver]
})
export class ApiKeysModule {}
