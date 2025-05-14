import { ArgsType, Field, InputType, Int, InterfaceType, registerEnumType } from "@nestjs/graphql";
import { Node } from "../models/node.model";
import { register } from "module";

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

registerEnumType(SortDirection, {
    name: 'SortDirection'
});


@InputType()
export class PaginationSortBy {
    @Field(() => SortDirection, { nullable: true })
    createdAt?: SortDirection;

    title?: SortDirection;
    
}

@ArgsType()
export class PaginationArgs {
    @Field(()=> Int)
    skip: number;

    @Field(()=> Int)
    take: number;


}





@InterfaceType()
export abstract class Pagination<N extends Node = Node> {
 
    @Field()
    totalCount: number;

    @Field(() => [Node])
    abstract nodes: N[];

}