import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { User } from "src/users/models/users.model";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity()
@ObjectType()
export class Message extends Node {
   

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String)
    @Column()
    image: string;

  
    @Field(() => String)
    @Column()
    receiverId: string;


    // JOIN COLUMN
    @Field(() => User)
    @ManyToOne(() => User, (user) => user.messages)
    @JoinColumn()
    author: User;

    

    @RelationId((self: Message) => self.author)
    readonly authorId: User['id'];

   
 

}