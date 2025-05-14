import { Field, ObjectType } from "@nestjs/graphql";
import { Node } from "src/pagination/models/node.model";
import { Column, Entity } from "typeorm";



@Entity()
@ObjectType()
export class SecurityPolicies extends Node {


    @Field(() => String)
    @Column()
    policyName: string;

    @Field(() => String)
    @Column()
    description: string;

}