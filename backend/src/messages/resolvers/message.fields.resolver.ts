import { UsersService } from "src/users/users.service";
import { Message } from "../models/message.model";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "src/users/models/users.model";


@Resolver(Message)
export class MessageFieldsResolver {
    constructor(private userService: UsersService,) {}

    @ResolveField(()=> User)
    async author(@Parent() message: Message){
        if (!message.authorId) {return null};
    
        try {
            return await this.userService.userGetById(message.authorId);

        } catch (e) {
            return null;    
        }
    }
}