import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { UserSession } from "../models/user_sessions.model";
import { UserSessionsService } from "../user_sessions.service";
import { UserSessionCreateInput, UserSessionCreateOutput } from "../dto/userSessions-create.dto";
import { UserSessionsUpdateInput, UserSessionsUpdateOutput } from "../dto/userSessions-update.dto";


@Resolver(UserSession)
export class userSessionMutationResolver {
    constructor(private readonly userSessionService: UserSessionsService
    ){}

    @Mutation(()=> UserSessionCreateOutput)
    async userSessionCreate(
        @Args('input') input: UserSessionCreateInput,)
        {
        return this.userSessionService.UserSessionCreate(input);
    }

    @Mutation(() => UserSessionsUpdateOutput)
    async userSessionUpdate(
        @Args({name: 'userSessionId', type: () => ID})userSessionId: UserSession['id'],
        @Args('input') input: UserSessionsUpdateInput)
        {
        return this.userSessionService.userSessionUpdate(userSessionId, input);
    }
    
}