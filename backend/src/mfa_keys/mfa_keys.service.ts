import { Injectable } from '@nestjs/common';
import { MfaKeyCreateInput, MfaKeyCreateOutput } from './dto/mfaKey-create.dto';
import { User } from 'src/users/models/users.model';
import { MfaKey } from './models/mfa_key.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MfaKeysService {
    constructor(
        @InjectRepository(MfaKey)
        private readonly mfaKeyRepository: Repository<MfaKey>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async mfaKeyCreate(input: MfaKeyCreateInput): Promise<MfaKeyCreateOutput> {
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });
        
        if (!user) {
            throw new Error('User not found');
        }

        const newMfaKey = this.mfaKeyRepository.create({
            mfaType: input.mfaType,
            mfaKey: input.mfaKey,
            status: input.status,
            user,  
        });

        const mfaKey = await this.mfaKeyRepository.save(newMfaKey);
        return { mfaKey };
    }
}
