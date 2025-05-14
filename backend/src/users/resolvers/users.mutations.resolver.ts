import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../models/users.model";
import { UserCreateInput, UserCreateOutput } from "../dto/users-create.dto";
import { UsersService } from "../users.service";
import * as bcrypt from "bcrypt";


@Resolver(User)
export class UserMutationsResolver {
    constructor(
        private readonly userService: UsersService,
        
    ) {}   

    @Mutation(() => UserCreateOutput)
    async userCreate(@Args('input') input: UserCreateInput): Promise<UserCreateOutput> {
        let hash = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(input.password, hash);
        const newUser ={
            ...input, password: hashPassword,
        }

        return this.userService.userCreate(newUser);
    }
}