import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { MessageService } from "../message.service";
import { MessageCreateInput, MessageCreateOutput } from "../dto/message-create.dto";
import { Message } from "../models/message.model";
import { MessageUpdateInput, MessageUpdateOutput } from "../dto/message-update.dto";
import { MessageDeleteOutput } from "../dto/message-delete.dto";
import { UseGuards } from "@nestjs/common";
import { CurrentUser, JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { JWTPayload } from "src/auth/auth.service";


@Resolver(Message)
export class MessageMutationsResolver {
    constructor(private readonly messageService: MessageService ){}

    // a decoration to protected and needed to be logged in
    @UseGuards(JwtAuthGuard)
    @Mutation(() => MessageCreateOutput)
    async messageCreate(
        @CurrentUser() user:JWTPayload, 
        @Args('input') input: MessageCreateInput) {
        return this.messageService.messageCreate(user,input);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => MessageUpdateOutput)
    async messageUpdate(
        @Args({name: 'messageId', type: () => ID})messageId: Message['id'], 
        @Args('input') input: MessageUpdateInput) 
        {
        return this.messageService.messageUpdate(messageId,input);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => MessageDeleteOutput)
    async messageDelete(
        @Args({name: 'messageId', type: () => ID})messageId: Message['id'],
    ) {
        return this.messageService.messageDelete(messageId);
    }
}
