import { Module } from '@nestjs/common';
import { PasswordResetHistoryService } from './password_reset_history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordResetHistory } from './models/password_reset_history.model';
import { User } from 'src/users/models/users.model';
import { PasswordResetHistoryMutationsResolver } from './resolvers/passwordResetHistory.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordResetHistory, User])],
  providers: [PasswordResetHistoryService, PasswordResetHistoryMutationsResolver],
})
export class PasswordResetHistoryModule {}
