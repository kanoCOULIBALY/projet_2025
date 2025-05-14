import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { Permission } from "src/permissions/models/permission.model";
import { Role } from "src/roles/models/role.model";
import { Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";




@Entity()
@ObjectType()
export class RolePermissions extends Node {

    @Field(() => Role)
    @ManyToOne(() => Role, (role) => role.rolePermissions, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'role_id'})
    role: Role;


    @Field(() => Permission)
    @ManyToOne(() => Permission, (permission) => permission.rolePermissions, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'permission_id'})
    permission: Permission;


    @RelationId((rolePermission: RolePermissions) => rolePermission.role)
    readonly roleId: string;

    @RelationId((rolePermission: RolePermissions) => rolePermission.permission)
    readonly permissionId: string;



}
