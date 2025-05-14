import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Message } from "../models/message.model";

@InputType()

export class MessageCreateInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => String)
    image: string;

    @Field(()=> String)
    receiverId: string;

   
}

@ObjectType()
export class MessageCreateOutput{
    @Field(() => Message)
    message: Message;
}