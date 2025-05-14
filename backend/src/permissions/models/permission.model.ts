import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { RolePermissions } from "src/role_permissions/models/role_permissions.model";
import { Column, Entity, OneToMany } from "typeorm";


@Entity()
@ObjectType()
export class Permission extends Node {

    @Field(() => String)
    @Column()
    permissionName: string;

    @Field(() => String)
    @Column()
    description: string;

    @OneToMany(()=> RolePermissions, (rolePermission) => rolePermission.permission)
    rolePermissions: RolePermissions[];
    
}