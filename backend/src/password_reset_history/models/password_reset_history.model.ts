import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";


@Entity()
@ObjectType()
export class PasswordResetHistory extends Node{

    @Field(() => String)
    @Column()
    resetToken: string;

    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    expiresAt: Date;


    @Field(() => String)
    @Column()
    status: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.passwordWordResetHistorys, { onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User;

    
    @RelationId((passwordWordResetHistory: PasswordResetHistory) => passwordWordResetHistory.user)
    readonly userId: User;

}