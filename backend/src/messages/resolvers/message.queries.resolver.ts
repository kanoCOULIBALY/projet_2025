import { Args, Query, Resolver } from "@nestjs/graphql";
import { Message } from "../models/message.model";
import { MessageService } from "../message.service";
import { MessagePagination, MessagePaginationArgs } from "../dto/message-pagination.dto";

@Resolver(Message)
export class MessageQueriesResolver {
    constructor(private readonly messageService: MessageService) {}

    @Query(() => MessagePagination)
    async messagePagination(@Args() args: MessagePaginationArgs) {
        return this.messageService.messagePagination(args);
    }
}