import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './models/permission.model';
import { PermissionCreateInput, PermissionCreateOutput } from './dto/permissions-create.dto';
import { PermissionUpdateInput, PermissionUpdateOutput } from './dto/permission-update.dto';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>,
    ) {}

    async permissionsCreate(input: PermissionCreateInput): Promise<PermissionCreateOutput> {
        const newPermission = this.permissionRepository.create({
            permissionName: input.permissionName,
            description: input.description,
        });
        const permission = await this.permissionRepository.save(newPermission);
        return { permission };
    }

    async permissionUpdate(permissionId: Permission['id'],
        input: PermissionUpdateInput,
    ): Promise<PermissionUpdateOutput> {
        const permission = await this.permissionRepository.findOneOrFail({ where: { id: permissionId } });
        permission.permissionName = input.permissionName;
        permission.description = input.description;
        await permission.save();
        return { permission };
    }
    
}
