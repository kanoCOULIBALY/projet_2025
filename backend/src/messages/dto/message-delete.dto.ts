import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Message } from "../models/message.model";

@ObjectType()
export class MessageDeleteOutput{
    @Field(() => ID)
    messageId: Message['id'];
}
