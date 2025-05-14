import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { RolePermissions } from "../models/role_permissions.model";


@InputType()
export class RolePermissionsCreateInput {
    @Field(() => String)
    roleId: string;

    @Field(() => String)
    permissionId: string;

}

@ObjectType()
export class RolePermissionsCreateOutput {
    @Field(() => RolePermissions)
    rolePermissions: RolePermissions;
}