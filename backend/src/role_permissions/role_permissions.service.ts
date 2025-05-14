import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RolePermissions } from './models/role_permissions.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/models/role.model';
import { Permission } from 'src/permissions/models/permission.model';
import { RolePermissionsCreateInput, RolePermissionsCreateOutput } from './dto/rolePermissions-create.dto';

@Injectable()
export class RolePermissionsService {
    constructor(
        @InjectRepository(RolePermissions)
        private readonly rolePermissionsRepository: Repository<RolePermissions>,

        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,

        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>,
    ){}

    async rolePermissionsCreate(input: RolePermissionsCreateInput): Promise<RolePermissionsCreateOutput> {
        const role = await this.roleRepository.findOne({ where: { id: input.roleId.toString() } });
        const permission = await this.permissionRepository.findOne({ where: { id: input.permissionId.toString() } });

        if (!role || !permission) {
            throw new Error('Role or Permission not found');
        }

        const newRolePermission = this.rolePermissionsRepository.create({
            roleId: input.roleId,
            permissionId: input.permissionId,
        });

        const rolePermissions = await this.rolePermissionsRepository.save(newRolePermission);
        return { rolePermissions };
    }
}
