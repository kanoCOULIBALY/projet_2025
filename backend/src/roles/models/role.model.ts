import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { RolePermissions } from "src/role_permissions/models/role_permissions.model";
import { UserRole } from "src/user_roles/models/user_role.model";
import { Column, Entity, OneToMany } from "typeorm";


@Entity()
@ObjectType()
export class Role extends Node {
    
    @Field(() => String)
    @Column()
    roleName: string;

    @Field(() => String)
    @Column()
    description: string;

    @OneToMany(() => UserRole, (userRole) => userRole.role)
    userRoles: UserRole[];

    
    @OneToMany(()=> RolePermissions, (rolePermission) => rolePermission.role)
    rolePermissions: RolePermissions[];

}