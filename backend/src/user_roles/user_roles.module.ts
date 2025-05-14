import { Module } from '@nestjs/common';
import { UserRolesService } from './user_roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './models/user_role.model';
import { User } from 'src/users/models/users.model';
import { Role } from 'src/roles/models/role.model';
import { UserRoleMutationResolver } from './resolvers/userRoles.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole, User, Role])],
  providers: [UserRolesService, UserRoleMutationResolver]
})
export class UserRolesModule {}
