import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";


@Entity()
@ObjectType()
export class AuditLog extends Node {

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.auditLogs, {onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User;

    @Field(() => String)
    @Column()
    actionType: string;

    @Field(() => String)
    @Column()
    targetObject: string;

    @Field(() => String)
    @Column()
    ipAddress: string;

    @RelationId((auditLog: AuditLog) => auditLog.user)
    readonly userId: User;




}