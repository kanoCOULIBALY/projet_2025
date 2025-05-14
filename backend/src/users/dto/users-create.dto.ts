import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "../models/users.model";
import { Column } from "typeorm";


@InputType()
export class UserCreateInput {
    
    @Field(() => String)
    firstName: string;

    @Field(() => String)
    lastName: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    @Field(() => String)
    status: string;

    @Field(() => Date, {nullable: true})
    lastLogin: Date;

    @Field(() => String, {nullable: true})
    avatar?: string;
    
}

@ObjectType()
export class UserCreateOutput{
    @Field(() => User)
    user: User;
    
}