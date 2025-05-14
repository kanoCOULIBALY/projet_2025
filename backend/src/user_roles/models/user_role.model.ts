import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { Role } from "src/roles/models/role.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";



@Entity()
@ObjectType()
export class UserRole extends Node {

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.userRoles, { onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User;

    @Field(() => Role)
    @ManyToOne(() => Role, (role) => role.userRoles, { onDelete: 'CASCADE'})
    @JoinColumn({ name: 'role_id'})
    role: Role;

    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    assignedAt: Date;

    @RelationId((userRole: UserRole) => userRole.user)
    readonly userId: User;

    @RelationId((userRole: UserRole) => userRole.role)
    readonly roleId: string;


}