import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, RelationId } from "typeorm";



@Entity()
@ObjectType()
export class UserSession extends Node {

    @Field(() => String)
    @Column()
    ip_address: string;

    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    expires_at: Date;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.userSessions, { onDelete: "CASCADE"})
    @JoinColumn({ name: 'user_id'})
    user: User;

    @RelationId((userSession: UserSession) => userSession.user)
    readonly userId: User;




}