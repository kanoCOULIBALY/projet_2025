import { InputType, ObjectType } from "@nestjs/graphql";
import { MessageCreateInput, MessageCreateOutput } from "./message-create.dto";

@InputType()

export class MessageUpdateInput extends MessageCreateInput{
    
}

@ObjectType()
export class MessageUpdateOutput extends MessageCreateOutput{
    
}