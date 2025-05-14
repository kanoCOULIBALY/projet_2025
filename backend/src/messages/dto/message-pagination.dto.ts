import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { Pagination, PaginationArgs, PaginationSortBy,SortDirection } from "src/pagination/dto/pagination.dto";
import { Message } from "../models/message.model";


@InputType()
export class MessagePaginationSortBy extends PaginationSortBy{
    @Field(() => String, {nullable: true})
    title?: SortDirection;
} 

@ArgsType()
export class MessagePaginationArgs extends PaginationArgs{
    @Field(() => MessagePaginationSortBy, {nullable: true})
    sortBy?: MessagePaginationSortBy;
            
}

@ObjectType()
export class MessagePagination extends Pagination{
    @Field(() => [Message]) 
    nodes: Message[];  
}