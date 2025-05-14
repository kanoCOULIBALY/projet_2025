
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/users.model';
import { UserMutationsResolver } from './resolvers/users.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserMutationsResolver],
  exports: [UsersService],
})
export class UsersModule {}
