import { Module } from '@nestjs/common';
import { UserSessionsService } from './user_sessions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSession } from './models/user_sessions.model';
import { User } from 'src/users/models/users.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserSession, User])],
  providers: [UserSessionsService,UserSessionsService]
})
export class UserSessionsModule {}
