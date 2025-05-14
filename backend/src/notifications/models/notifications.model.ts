import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";



@Entity()
@ObjectType()
export class Notification extends Node{

    @Field(() => String)
    @Column()
    type: string;

    @Field(() => String)
    @Column()
    content: string;

    @Field(() => String)
    @Column()
    status: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.notifications, { onDelete: "CASCADE"})
    @JoinColumn({ name: 'user_id'})
    user: User;

    @RelationId((notification: Notification ) => notification.user)
    readonly userId: User;
    

}