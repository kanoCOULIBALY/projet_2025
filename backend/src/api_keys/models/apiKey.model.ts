import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { Column, Entity } from "typeorm";

@Entity()
@ObjectType()
export class ApiKey extends Node {

    @Field(() => String)
    @Column()
    apiKey: string;

    @Field(() => String)
    @Column()
    status: string;

    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    expiresAt: Date;


}
