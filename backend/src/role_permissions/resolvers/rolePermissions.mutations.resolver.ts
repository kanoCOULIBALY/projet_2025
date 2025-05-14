import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { RolePermissions } from "../models/role_permissions.model";
import { RolePermissionsService } from "../role_permissions.service";
import { RolePermissionsCreateInput, RolePermissionsCreateOutput } from "../dto/rolePermissions-create.dto";



@Resolver(RolePermissions)
export class RolePermissionsMutationResolver {
    constructor(
        private readonly rolePermissionsService: RolePermissionsService,
    ) {}

    @Mutation(() => RolePermissionsCreateOutput)
    async rolePermissionsCreate(
        @Args('input') input: RolePermissionsCreateInput,
    ) {
        return this.rolePermissionsService.rolePermissionsCreate(input);
    }
}