import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { UserRole } from "../models/user_role.model";
import { UserRolesService } from "../user_roles.service";
import { UserRoleCreateInput, UserRoleCreateOutput } from "../dto/userRoles-create.dto";
import { UserRoleUpdateInput, UserRoleUpdateOutput } from "../dto/userRoles-update.dto";


@Resolver(UserRole)
export class UserRoleMutationResolver {
    constructor(private readonly userRoleService: UserRolesService
    ){}

    @Mutation(()=> UserRoleCreateOutput)
    async userRoleCreate(
        @Args('input') input: UserRoleCreateInput,)
        {
        return this.userRoleService.UserRoleCreate(input);
    }

    @Mutation(() => UserRoleUpdateOutput)
    async userRoleUpdate(
        @Args({name: 'userRoleId', type: () => ID})userRoleId: UserRole['id'],
        @Args('input') input: UserRoleUpdateInput)
        {
        return this.userRoleService.userRoleUpdate(userRoleId, input);
    }
    
}