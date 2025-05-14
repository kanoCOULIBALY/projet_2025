import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { Permission } from "../models/permission.model";
import { PermissionsService } from "../permissions.service";
import { PermissionCreateInput, PermissionCreateOutput } from "../dto/permissions-create.dto";
import { PermissionUpdateInput, PermissionUpdateOutput } from "../dto/permission-update.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Resolver(Permission)
export class PermissionMutationResolver {
    constructor(
        private readonly permissionsService: PermissionsService,
    ) {}

    @Mutation(() => PermissionCreateOutput)
    async permissionsCreate(
        @Args('input') input: PermissionCreateInput,
    ): Promise<PermissionCreateOutput> {
        return this.permissionsService.permissionsCreate(input);
    }

    @Mutation(() => PermissionUpdateOutput)
    async permissionUpdate(
        @Args({ name: 'permissionId', type: () => ID }) permissionId: Permission['id'],
        @Args('input') input: PermissionUpdateInput,
    ): Promise<PermissionUpdateOutput> {
        return this.permissionsService.permissionUpdate(permissionId, input);
    }
}