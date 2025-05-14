import { Module } from '@nestjs/common';
import { RolePermissionsService } from './role_permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissions } from './models/role_permissions.model';
import { Role } from 'src/roles/models/role.model';
import { Permission } from 'src/permissions/models/permission.model';
import { RolePermissionsMutationResolver } from './resolvers/rolePermissions.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RolePermissions, Role, Permission])],
  providers: [RolePermissionsService, RolePermissionsMutationResolver],
})
export class RolePermissionsModule {}
