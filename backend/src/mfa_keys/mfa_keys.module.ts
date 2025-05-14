import { Module } from '@nestjs/common';
import { MfaKeysService } from './mfa_keys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { MfaKey } from './models/mfa_key.model';
import { MfaKeyMutationsResolver } from './resolvers/mfaKey.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MfaKey, User])],
  providers: [MfaKeysService, MfaKeyMutationsResolver],
})
export class MfaKeysModule {}
