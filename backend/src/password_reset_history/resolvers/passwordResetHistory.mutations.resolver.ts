import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { PasswordResetHistory } from "../models/password_reset_history.model";
import { PasswordResetHistoryService } from "../password_reset_history.service";
import { PasswordResetHistoryCreateInput, PasswordResetHistoryCreateOutput } from "../dto/passwordResetHistory-create.dto";


@Resolver(PasswordResetHistory)
export class PasswordResetHistoryMutationsResolver {

    constructor(        
        private readonly passwordResetHistoryService: PasswordResetHistoryService,
    ) {}

    @Mutation(() => PasswordResetHistoryCreateOutput)
    async createPasswordResetHistory(
        @Args('input') input: PasswordResetHistoryCreateInput,
    ): Promise<PasswordResetHistoryCreateOutput> {
        return this.passwordResetHistoryService.passwordResetHistoryCreate(input);
    }

}