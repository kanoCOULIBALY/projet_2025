import { Injectable } from '@nestjs/common';
import { PasswordResetHistory } from './models/password_reset_history.model';
import { Repository } from 'typeorm';
import { PasswordResetHistoryCreateInput, PasswordResetHistoryCreateOutput } from './dto/passwordResetHistory-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';

@Injectable()
export class PasswordResetHistoryService {
    constructor(
        @InjectRepository(PasswordResetHistory)
        private readonly passwordResetHistoryRepository: Repository<PasswordResetHistory>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async passwordResetHistoryCreate(input: PasswordResetHistoryCreateInput): Promise<PasswordResetHistoryCreateOutput> {
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });
        
        if (!user) {
            throw new Error('User not found');
        }

        const newPasswordResetHistory = this.passwordResetHistoryRepository.create({
            resetToken: input.resetToken,
            expiresAt: input.expiresAt,
            status: input.status,
            user,
        });
        
        const passwordResetHistory = await this.passwordResetHistoryRepository.save(newPasswordResetHistory);
        return { passwordResetHistory };
    }
}
