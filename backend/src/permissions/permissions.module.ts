import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionMutationResolver } from './resolvers/permissions.mutations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './models/permission.model';

@Module({
  imports: [TypeOrmModule .forFeature([Permission])], 
  providers: [PermissionsService, PermissionMutationResolver]
})
export class PermissionsModule {}
