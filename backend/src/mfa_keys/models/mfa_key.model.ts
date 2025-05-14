import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";


@Entity()
@ObjectType()
export class MfaKey extends Node{

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.auditLogs, {onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User;

    @Field(() => String)
    @Column()
    mfaType: string;

    @Field(() => String)
    @Column()
    mfaKey: string;

    @Field(() => String)
    @Column()
    status: string;

    @RelationId((mfaKey: MfaKey) => mfaKey.user)
    readonly userId: User;
}
