import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { Repository } from 'typeorm';
import { UserSession } from './models/user_sessions.model';
import { UserSessionCreateInput, UserSessionCreateOutput } from './dto/userSessions-create.dto';
import { UserSessionsUpdateInput, UserSessionsUpdateOutput } from './dto/userSessions-update.dto';

@Injectable()
export class UserSessionsService {
    constructor(
        @InjectRepository(UserSession)
        private readonly userSessionRepository: Repository<UserSession>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}


    async UserSessionCreate(input: UserSessionCreateInput): Promise<UserSessionCreateOutput> {
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });

        if ( !user) {
            throw new Error('Role or Permission not found');
        }

        const newUserSession = this.userSessionRepository.create({
            ip_address: input.ip_address,
            expires_at: input.expires_at,
            user,

        });
       const userSession = await this.userSessionRepository.save(newUserSession);
       return {userSession};
    }

    async userSessionUpdate(userSessionId: UserSession['id'],
        input: UserSessionsUpdateInput
    ): Promise<UserSessionsUpdateOutput> {
        const userSession = await this.userSessionRepository.findOneOrFail({where: {id: userSessionId}});
        userSession.user,
       
        await userSession.save();
        return {userSession};
    }
}