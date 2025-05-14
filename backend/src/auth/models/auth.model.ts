import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";



@Entity()
@ObjectType()
export class Auth extends Node {

    @Field(() => String)
    @Column()
    token: string;


    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    expires_at: Date;

    @Field(() => String)
    @Column()
    status: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.auths, { onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User;

    @RelationId((auth: Auth) => auth.user)
    readonly userId: User;



}